import { Button, Card, Form, Input, message } from "antd";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { PatchApi } from "../../Api/Callapi";
import { UserChangePasswordLink } from "../../Api/Endpoint";
import register from "../../assets/signup.png";

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
const OwnerAccountSettings = () => {
  const history = useHistory();
  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({});
  const [disabled, setdisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (formData) => {
    var url = window.location.href;
    var token = url.split("token=")[1];
    formData.token = token;
    setValidate(true);
    setdisabled(true);

    if (formData.new_password !== "" && formData.confirm_new_password !== "") {
      var response = await PatchApi(UserChangePasswordLink, formData);
      var data = response.data;
      if (data.error_message) {
        message.error(data.error_message);
      } else if (response.status === 200) {
        message.success(data.response);
        history.push("/");
        setdisabled(false);
      } else {
        message.error("Something Went Wrong.");
      }
      console.log(formData);
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setFormData(values);
    handleSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col lg={14} style={{ width: "82%" }}>
          <Card style={{ margin: "10px 13px" }} width={400}>
            <div className="futsal-register">
              <div className="futsal-register-form" style={{ width: "100%" }}>
                <Card hoverable>
                  <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <Form.Item
                      name="old_password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password placeholder="Old Password" />
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
        </Col>
      </Row>
    </>
  );
};

export default OwnerAccountSettings;
