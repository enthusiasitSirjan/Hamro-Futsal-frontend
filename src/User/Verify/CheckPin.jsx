import { Button, Card, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PostApi } from "../../Api/Callapi";
import { ChangeForgetPasswordLink } from "../../Api/Endpoint";

const CheckPin = () => {
  const history = useHistory();

  const [disabled, setDisabled] = useState(false);
  const onFinish = async (values) => {
    setDisabled(true);

    if (
      values.pin !== "" &&
      values.new_password !== "" &&
      values.confirm_new_password !== ""
    ) {
      const response = await PostApi(ChangeForgetPasswordLink, values);
      const data = response.data;
      console.log(response);
      if (data.error_msg) {
        message.error(data.error_msg);
        setDisabled(false);
      } else if (response.status === 200) {
        message.success(data.message);
        setDisabled(false);
        history.push("/login");
      }
    }
  };

  return (
    <>
      <div className="register-main-container">
        <Card>
          <div className="account-details">
            <div className="Set-up-account">
              <p className="instruction">
                Please enter the following details to continue
              </p>
              <div className="input-form">
                <Form onFinish={onFinish} style={{ marginTop: "1%" }}>
                  <Form.Item
                    name="pin"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Pin No!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter PIN No" />
                  </Form.Item>
                  <Form.Item
                    name="new_password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      {
                        pattern: /[A-Z]/,
                        message: "Must contain one Uppercase",
                      },
                      {
                        pattern: /[0-9]/,
                        message: "Must contain one number",
                      },
                      {
                        pattern: /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
                        message: "Must contain one special character.",
                      },
                      {
                        min: 8,
                        message: "Must contain atleast 8 character.",
                      },
                      {
                        max: 32,
                        message: "Must contain less than 32.",
                      },
                    ]}
                  >
                    <Input.Password placeholder="New Password" />
                  </Form.Item>
                  <Form.Item
                    name="confirm_new_password"
                    dependencies={["new_password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue("new_password") === value
                          ) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Confirm Password not matched!"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm New Password"
                      visibilityToggle={false}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={disabled}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CheckPin;
