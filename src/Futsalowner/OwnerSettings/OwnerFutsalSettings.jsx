import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Avatar, Button, Card, Form, Input, message, Radio } from "antd";
import { GetApi, PatchApi } from "../../Api/Callapi";
import { UserOutlined } from "@ant-design/icons";
import { MyFutsalLink, EditFutsalLink } from "../../Api/Endpoint";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const { TextArea } = Input;
const OwnerFutsalSettings = () => {
  const history = useHistory();
  //   const futsalID = 15;
  const UserID = localStorage.getItem("user_id" || "");

  const [editingMode, setEditingMode] = useState(false);
  const [futId, setfutId] = useState();

  const [disabled, setdisabled] = useState(false);
  const [img, setImg] = useState();
  const [reload, setReload] = useState(false);

  const [futsalInfoprofile, setfutsalInfoprofile] = useState({});
  const [initFutsalInfo, setFutsalInitfutsalInfo] = useState();

  useEffect(() => {
    init();
  }, [reload]);

  const my_futsal_url = MyFutsalLink;

  const init = async (e) => {
    const res = await GetApi(my_futsal_url);

    if (res.status === 200) {
      const data = res.data[0];
      const futsal_id = data.id;
      setfutId(futsal_id);
      setfutsalInfoprofile(data);
      setFutsalInitfutsalInfo(data);
      console.log(data);
      console.log("futsal id :", data.id);
    } else {
      message.error("Sorry couldn't load profile info right now");
    }
  };

  const [futsalInfo, setfutsalInfo] = useState({});

  const handleEdit = () => {
    setEditingMode(true);
  };

  const CancelEdit = () => {
    setEditingMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfutsalInfo({ ...futsalInfo, [name]: value });
    console.log(futsalInfo);
  };

  const handleChangeImage = (e) => {
    var fileObject = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileObject);
    fileReader.onload = function () {
      var result = fileReader.result;
      console.log(result);
      setImg(fileObject);
      setfutsalInfo({ ...futsalInfo, photo: fileObject });
      setFutsalInitfutsalInfo({ ...initFutsalInfo, photo: result });
      console.log(initFutsalInfo);
    };
  };
  const onFinish = async (values) => {
    console.log("phone:", phone_number);
    console.log("Success:", values);

    setdisabled(true);

    var futsalData = new FormData();

    for (var key in values) {
      futsalData.append(key, values[key]);
    }
    console.log(img);
    if (img !== undefined) {
      futsalData.append("fut_image", img);
    }
    if (phone_number !== undefined) {
      futsalData.append("phone", phone_number);
    }

    const futsal_url = EditFutsalLink + futId;

    const edit_response = await PatchApi(futsal_url, futsalData);
    if (edit_response.status === 200) {
      console.log("Edit futsal response :::", edit_response.data);
      message.success("Futsal Edited");
      setEditingMode(!editingMode);
      setReload(!reload);
      setdisabled(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [phone_number, setphone_number] = useState();
  return (
    <>
      <Row>
        <Col lg={14} style={{ width: "82%" }}>
          <Card style={{ margin: "10px 13px" }} width={400}>
            <div className="back-button"></div>
            <div
              className="profile-info"
              style={{ marginTop: "20px", overflow: "hidden" }}
            >
              <Row>
                <Col>
                  {editingMode ? (
                    <>
                      <img
                        style={{
                          height: "120px",
                          width: "120px",
                          display: "block",
                        }}
                        src={futsalInfoprofile.fut_image}
                        alt="img"
                      />
                      <input
                        type="file"
                        name="photo"
                        onChange={handleChangeImage}
                        style={{ marginTop: "10px" }}
                      />
                    </>
                  ) : (
                    <Avatar
                      src={
                        futsalInfoprofile.fut_image
                          ? futsalInfoprofile.fut_image
                          : null
                      }
                      shape="circle"
                      size={180}
                      icon={<UserOutlined />}
                      style={{ marginLeft: "5%" }}
                    />
                  )}
                </Col>
                <Col>
                  <div className="profile-edit">
                    {editingMode ? (
                      <>
                        {initFutsalInfo ? (
                          <Form
                            layout="horizontal"
                            name="company_profile"
                            initialValues={initFutsalInfo}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                          >
                            <Form.Item
                              name="futsal_name"
                              label="Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your  name!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              name="location"
                              label="Location"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your user name!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              name="contact_email"
                              label="Email"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your contact email!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item label="Phone" required>
                              <PhoneInput
                                international
                                placeholder="Enter phone number"
                                value={futsalInfoprofile.fut_phone}
                                onChange={setphone_number}
                              />
                            </Form.Item>

                            <Form.Item
                              name="futsal_rate"
                              label="Futsal Rate"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your futsal rate!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              name="description"
                              label="Futsal Description"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input your futsal description!",
                                },
                              ]}
                            >
                              <TextArea />
                            </Form.Item>
                            <Form.Item
                              name="fut_type"
                              label="Futsal type"
                              rules={[
                                {
                                  required: true,
                                  message: "Please check your futsal type!",
                                },
                              ]}
                            >
                              <Radio.Group name="fut_type">
                                <Radio value="5A">5A</Radio>
                                <Radio value="7A">7A</Radio>
                                <Radio value="5A/7A">5A/7A</Radio>
                              </Radio.Group>
                            </Form.Item>
                            <Form.Item
                              name="fut_map"
                              label="Futsal google map"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input your google embedded code!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>

                            <div style={{ display: "flex", gap: "20px" }}>
                              <Button
                                type="primary"
                                htmlType="submit"
                                disabled={disabled}
                              >
                                Save
                              </Button>
                              <Button type="primary" onClick={CancelEdit}>
                                Cancel
                              </Button>
                            </div>
                          </Form>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Futsal Name
                        </p>
                        <p className="name">
                          {futsalInfoprofile && futsalInfoprofile.futsal_name}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Location
                        </p>
                        <p className="name">
                          {futsalInfoprofile && futsalInfoprofile.location}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Phone
                        </p>
                        <p className="name">
                          {futsalInfoprofile && futsalInfoprofile.fut_phone}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Email
                        </p>
                        <p className="name">
                          {futsalInfoprofile && futsalInfoprofile.contact_email}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Description
                        </p>
                        <p className="name">
                          {futsalInfoprofile && futsalInfoprofile.description}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Futsal type
                        </p>
                        <p className="name">
                          {futsalInfoprofile && futsalInfoprofile.fut_type}
                        </p>
                      </>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="footer-button"
              style={{ width: "100%", float: "right" }}
            >
              {editingMode ? (
                <></>
              ) : (
                <Button
                  className="program-continue"
                  onClick={handleEdit}
                  style={{ float: "left" }}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OwnerFutsalSettings;
