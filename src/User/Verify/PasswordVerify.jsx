import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, message, Spin } from "antd";
import { useHistory } from "react-router-dom";
import { PostApi } from "../../Api/Callapi";
import { UserForgetPasswordLink } from "../../Api/Endpoint";
import register from "../../assets/signup.png";

const PasswordVerify = () => {
  const history = useHistory();
  const [disabled, setdisabled] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    setdisabled(true);

    if (values.email !== "") {
      var response = await PostApi(UserForgetPasswordLink, values);
      var data = response.data;
      if (response.status === 200) {
        message.success(data.message);
        history.push("/verify_pin");
        setdisabled(false);
      } else {
        message.error("Something Went Wrong.");
      }
      console.log("Values:", values);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="register-main-container">
        <Card>
          <div className="account-details">
            <div className="Set-up-account">
              <p className="form-header">Forget Password</p>
            </div>
            <div
              className="Set-up-account"
              style={{ display: "flex", padding: "0px 0px 20px" }}
            >
              <p className="">
                <h6>Please enter your Login Credentials</h6>
              </p>
            </div>

            <div className="input-form res-login">
              <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please input valid Email!",
                    },
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <p className="instruction">Link will be sent on Your email.</p>
                <Form.Item>
                  {loading ? (
                    <Spin>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          backgroundColor: "green",
                          borderRadius: "5px",
                          width: "236px",
                          color: "#f3f3f3",
                          marginTop: "50px",
                          fontSize: "16px",
                          height: "40px",
                        }}
                      >
                        Submit
                      </Button>
                    </Spin>
                  ) : (
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={disabled}
                    >
                      Submit
                    </Button>
                  )}
                </Form.Item>
              </Form>
              <div className="futsal-register-image">
                <img
                  src={register}
                  alt="futsal-register"
                  style={{ width: "68%" }}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default PasswordVerify;
