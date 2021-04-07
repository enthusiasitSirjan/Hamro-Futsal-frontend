import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { Link, useHistory } from "react-router-dom";
import register from "../../assets/signup.png";
import { PatchApi } from "../../Api/Callapi";
import { ChangeForgetPasswordLink } from "../../Api/Endpoint";

const NewPassword = () => {
  const history = useHistory();

  const [disabled, setdisabled] = useState(false);

  const onFinish = async (values) => {
    //     handleSubmit(values);
    console.log("Success:", values);
    setdisabled(true);

    if (values.new_password !== "" && values.confirm_new_password !== "") {
      var response = await PatchApi(ChangeForgetPasswordLink, values);
      var data = response.data;
      if (data.error_message) {
        message.error(data.error_message);
      } else if (response.status === 200) {
        message.success(data.response);
        history.push("/login");
        setdisabled(false);
      } else {
        message.error("Something Went Wrong.");
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="register-main-container">
        <Card>
          <div className="futsal-register">
            <div className="futsal-register-form" style={{ width: "100%" }}>
              <Card hoverable>
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
              </Card>
            </div>
            <div className="futsal-register-image">
              <img
                src={register}
                alt="futsal-register"
                style={{ width: "68%" }}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default NewPassword;
