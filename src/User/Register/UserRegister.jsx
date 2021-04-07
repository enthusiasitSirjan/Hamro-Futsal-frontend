import React, { useState } from "react";
import {
  Form,
  Input,
  Radio,
  Select,
  Checkbox,
  Button,
  Card,
  message,
} from "antd";
import { Link, useHistory } from "react-router-dom";
import { PostApi } from "../../Api/Callapi";
import { UserRegisterLink } from "../../Api/Endpoint";
import register from "../../assets/signup.png";
import Navbar from "../../Landingpage/Navbar/Navbar";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
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

const UserRegister = () => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    user_role: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (formData) => {
    if (true) {
      var form_values = new FormData();
      formData["phone"] = phone;

      for (var key in formData) {
        form_values.append(key, formData[key]);
      }

      var response = await PostApi(UserRegisterLink, form_values);
      var data = response.data;
      if (data.error_message) {
        message.error(data.error_message);
      } else if (response.status === 200) {
        message.success(
          "Signup Successful. Check your email for PIN NO to verify."
        );
        history.push({
          pathname: "/verify",
          state: "Check your Email to verify Your Account.",
        });
      } else {
        message.error(data.result);
        console.log("error in process::");
      }
    }
  };
  const onFinish = (values) => {
    handleSubmit(values);
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [phone, setPhone] = useState();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="register-main-container">
        <Card>
          <div className="futsal-register">
            <div className="futsal-register-form">
              <Card hoverable>
                {" "}
                <Form
                  {...formItemLayout}
                  form={form}
                  name="register"
                  initialValues={formData}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  scrollToFirstError
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="User Name"
                    name="username"
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
                    name="email"
                    label="E-mail"
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
                    name="password"
                    label="Password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="password2"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    name="phone_number"
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
                    label="Address"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please fill up your address!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="user_role"
                    label="Role"
                    rules={[
                      {
                        required: true,
                        message: "Please Select Role",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value="USER">User</Radio>
                      <Radio value="OWNER">Futsal Owner</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error("Should accept agreement")
                              ),
                      },
                    ]}
                    {...tailFormItemLayout}
                  >
                    <Checkbox>
                      I agree to all <Link to=""> terms and conditions </Link>
                    </Checkbox>
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
            <div className="futsal-register-image">
              <img
                src={register}
                alt="futsal-register"
                style={{ width: "88%" }}
              />
              <p>
                <Link to="/login"> Do you have an account?</Link>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserRegister;
