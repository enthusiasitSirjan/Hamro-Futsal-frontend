import { Button, Card, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PostApi } from "../../Api/Callapi";
import { VerifyLink } from "../../Api/Endpoint";

const Emailverify = (props) => {
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  const onFinish = async (values) => {
    setDisabled(true);

    if (values.token !== "") {
      const response = await PostApi(VerifyLink, values);
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
                    name="token"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Pin No!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter PIN No" />
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

export default Emailverify;
