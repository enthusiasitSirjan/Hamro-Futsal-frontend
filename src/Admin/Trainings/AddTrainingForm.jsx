import { Button, Card, Col, Form, Input, message, Row } from "antd";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { PostApi } from "../../Api/Callapi";
import { AddTrainingsLink } from "../../Api/Endpoint";
import AdminSidebar from "../Sidebar/AdminSidebar";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const AddTrainingForm = () => {
  const [userInfo, setUserInfo] = useState({});

  const [img, setImg] = useState();

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
    };
  };
  const [phone, setPhone] = useState();

  const onFinish = async (values) => {
    console.log("Success:", values);
    var profileData = new FormData();

    for (var key in values) {
      profileData.append(key, values[key]);
    }
    console.log(img);
    if (img !== undefined) {
      profileData.append("t_photo", img);
    }
    const response = await PostApi(AddTrainingsLink, profileData);

    if (response.status === 201) {
      message.success("Training Added");
    } else {
      message.error("Failed to add training");
    }
  };
  return (
    <>
      <div className="admin-dashboard-container">
        <Row gutter={25}>
          <Col>
            <AdminSidebar />
          </Col>
          <Col style={{ width: "50%" }}>
            <div className="admin-training-form">
              <Card hoverable style={{ margin: "50px auto" }} width={400}>
                <div>
                  <div
                    className="first-column"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <input
                        type="file"
                        name="fut_image"
                        onChange={handleChangeImage}
                        style={{ marginTop: "10px" }}
                      />
                    </div>
                  </div>
                  <br />

                  <br />

                  <div>
                    {" "}
                    <Form
                      {...formItemLayout}
                      onFinish={onFinish}
                      scrollToFirstError
                    >
                      <Form.Item
                        name="t_name"
                        label="Training Name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your training name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="t_email"
                        label="Email "
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input your training E-mail!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="t_contact_phone"
                        label="Phone Number"
                        rules={[
                          {
                            required: true,
                            message: "Please input your contact number!",
                          },
                        ]}
                      >
                        <PhoneInput
                          international
                          value={phone}
                          onChange={setPhone}
                        />
                      </Form.Item>
                      <Form.Item label="Training Price">
                        <Form.Item
                          name="t_price"
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: "Please input your training rate!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Form.Item>
                      <Form.Item
                        name="t_age"
                        label="Ages"
                        rules={[
                          {
                            required: true,
                            message: "Please input your age!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="t_sessions"
                        label="Sessions"
                        rules={[
                          {
                            required: true,
                            message: "Please input your sessions!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name="t_location"
                        label="Location"
                        rules={[
                          {
                            required: true,
                            message: "Please input your location!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        name="t_date"
                        label="Training Date"
                        rules={[
                          {
                            required: true,
                            message: "Please input your training date!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddTrainingForm;
