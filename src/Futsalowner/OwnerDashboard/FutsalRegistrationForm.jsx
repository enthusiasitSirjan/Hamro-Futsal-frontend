import {
  Card,
  Radio,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Button,
  message,
} from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import FutsalOwnerSidebar from "../Sidebar/FutsalOwnerSidebar";
import "./Futsalregistration.css";
import { AuthPostApi } from "../../Api/Callapi";
import { CreateFutsalLink } from "../../Api/Endpoint";

const { Option } = Select;
const { TextArea } = Input;

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

const FutsalRegistrationForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [img, setImg] = useState();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    };
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    var profileData = new FormData();

    for (var key in values) {
      profileData.append(key, values[key]);
    }
    console.log(img);
    if (img !== undefined) {
      profileData.append("fut_image", img);
    }

    const response = await AuthPostApi(CreateFutsalLink, profileData);
    const data = response.data;
    if (data.error_message) {
      message.error(data.error_message);
    } else if (response.status === 201) {
      history.push("/owner/dashboard");
      message.success("Registered successfully");
    } else {
      message.error("Failed to register");
      console.log("error in process::");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [phone, setPhone] = useState();

  return (
    <>
      <div className="futsal-owner-dashboard">
        <Row gutter={25}>
          <Col>
            <FutsalOwnerSidebar />
          </Col>
          <Col style={{ margin: "50px auto" }}>
            <div className="container">
              <Card hoverable width={600} title="Futsal Registration Form">
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
                </div>
                <br />
                <br />
                <div>
                  <Form
                    {...formItemLayout}
                    onFinish={onFinish}
                    scrollToFirstError
                  >
                    <Form.Item
                      name="futsal_name"
                      label="Futsal Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="contact_email"
                      label="Email "
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="fut_phone"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <PhoneInput
                        international
                        value={phone}
                        onChange={setPhone}
                      />
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
                    <Form.Item label="Futsal Rate">
                      <Form.Item
                        name="futsal_rate"
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Please input your futsal rate!",
                          },
                        ]}
                      >
                        <InputNumber min={800} max={2500} />
                      </Form.Item>
                      <span className="ant-form-text"> per hour</span>
                    </Form.Item>
                    <Form.Item
                      name="location"
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
                      name="description"
                      label="Description"
                      rules={[
                        {
                          required: true,
                          message: "Please input your description!",
                        },
                      ]}
                    >
                      <TextArea />
                    </Form.Item>
                    <Form.Item
                      name="fut_map"
                      label="Futsal google map"
                      rules={[
                        {
                          required: true,
                          message: "Please input your google embedded code!",
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
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FutsalRegistrationForm;
