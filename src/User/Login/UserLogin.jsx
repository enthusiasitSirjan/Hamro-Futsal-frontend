import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostApi } from "../../Api/Callapi";
import { UserLoginLink } from "../../Api/Endpoint";
import login from "../../assets/login.png";
import Navbar from "../../Landingpage/Navbar/Navbar";

const UserLogin = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (formData) => {
    setLoading(false);

    if (formData.username !== "" && formData.password !== "") {
      var form_values = new FormData();

      for (var key in formData) {
        form_values.append(key, formData[key]);
      }

      var response = await PostApi(UserLoginLink, form_values);
      console.log("result:", response);
      var userType = response.data;

      if (response.status === 200 && response.data.response !== "Error") {
        localStorage.setItem("token", userType.token);
        localStorage.setItem("user_role", userType.user_role);
        localStorage.setItem("user_id", userType.pk);
        localStorage.setItem("user_name", userType.username);

        if (userType.user_role === "OWNER") {
          history.push("/owner/dashboard");
        } else if (userType.user_role === "USER") {
          history.push("/");
        } else if (userType.user_role === "ADMIN") {
          history.push("/admin/dashboard");
        }
        message.success("Logged in successfully");
      } else {
        message.error(response.data.error_message);
        setLoading(true);
      }
    }
  };

  const onFinish = (values) => {
    setFormData(values);

    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="login-main-container">
        <Card hoverable>
          <div className="login-container">
            <div className="login-image">
              <img src={login} alt="Login" />
              <h1>Hamro Futsal</h1>
            </div>
            <div className="login-main">
              <Card hoverable>
                <Form
                  className="login-form"
                  initialValues={formData}
                  onFinishFailed={onFinishFailed}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Link className="login-form-forgot" to="/forgot_password">
                      Forgot password
                    </Link>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                  </Form.Item>

                  <p>
                    Don't you have an account ?{" "}
                    <Link to="/register">Create One</Link>{" "}
                  </p>
                </Form>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default UserLogin;
