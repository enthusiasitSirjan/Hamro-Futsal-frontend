import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Avatar, Button, Card, Form, Input, message } from "antd";
import { GetApi, PatchApi } from "../../Api/Callapi";
import { UserProfileLink } from "../../Api/Endpoint";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ProfileSettings = () => {
  const history = useHistory();
  const UserID = localStorage.getItem("user_id" || "");

  const [editingMode, setEditingMode] = useState(false);

  const [disabled, setdisabled] = useState(false);
  const [img, setImg] = useState();
  const [reload, setReload] = useState(false);

  const [profileInfo, setProfileInfo] = useState({});
  const [initUserProfileInfo, setUserInitProfileInfo] = useState();

  useEffect(() => {
    init();
  }, [reload]);

  const profile_url = UserProfileLink + UserID;

  const init = async (e) => {
    const res = await GetApi(profile_url);

    if (res.status === 200) {
      setUserInitProfileInfo(res.data);
      setProfileInfo(res.data);
      console.log("User info here ::::", userInfo);
    } else {
      message.error("Sorry couldn't load profile info right now");
    }
  };
  const [userInfo, setUserInfo] = useState({});

  const handleEdit = () => {
    setEditingMode(true);
  };

  const CancelEdit = () => {
    setEditingMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  const handleChangeImage = (e) => {
    var fileObject = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileObject);
    fileReader.onload = function () {
      var result = fileReader.result;
      console.log(result);
      setImg(fileObject);
      setUserInfo({ ...userInfo, photo: fileObject });
      setUserInitProfileInfo({ ...initUserProfileInfo, photo: result });
      console.log(initUserProfileInfo);
    };
  };
  const onFinish = async (values) => {
    console.log("Success:", values);

    setdisabled(true);

    var profileData = new FormData();

    for (var key in values) {
      profileData.append(key, values[key]);
    }
    console.log(img);
    if (img !== undefined) {
      profileData.append("photo", img);
    }
    if (phone !== undefined) {
      profileData.append("phone_number", phone);
    }

    const edit_response = await PatchApi(profile_url, profileData);
    if (edit_response.status === 200) {
      console.log("Edit profile response :::", edit_response.data);
      message.success("Profile Edited");
      setEditingMode(!editingMode);
      setReload(!reload);
      setdisabled(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [phone, setPhone] = useState();
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
                        src={initUserProfileInfo.photo}
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
                      src={profileInfo.photo ? profileInfo.photo : null}
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
                        {initUserProfileInfo ? (
                          <Form
                            layout="horizontal"
                            name="company_profile"
                            initialValues={initUserProfileInfo}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                          >
                            <Form.Item
                              name="name"
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
                              name="email"
                              label="Email"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your user name!",
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>

                            <Form.Item label="Phone" required>
                              <PhoneInput
                                international
                                placeholder="Enter phone number"
                                value={profileInfo.phone_number}
                                onChange={setPhone}
                              />
                            </Form.Item>

                            <Form.Item
                              name="address"
                              label="Address"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your address!",
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
                          Name
                        </p>
                        <p className="name">
                          {profileInfo && profileInfo.name}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          User Name
                        </p>
                        <p className="name">
                          {profileInfo && profileInfo.username}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Phone
                        </p>
                        <p className="name">
                          {profileInfo && profileInfo.phone_number}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          Email
                        </p>
                        <p className="name">
                          {profileInfo && profileInfo.email}
                        </p>
                        <p
                          className="instruction"
                          style={{ marginBottom: "0px" }}
                        >
                          address
                        </p>
                        <p className="name">
                          {profileInfo && profileInfo.address}
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

export default ProfileSettings;
