import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Select, Row, Col, Button, Radio, message } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { GetApi, AuthPostApi } from "../../Api/Callapi";
import { UserProfileLink, BecomeMemberLink } from "../../Api/Endpoint";

const { Option } = Select;

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

const BecomeMember = (futsalId) => {
  // const history = useHistory();
  const UserID = localStorage.getItem("user_id" || "");

  const [profileInfo, setProfileInfo] = useState({});
  const profile_url = UserProfileLink + UserID;

  const init = async (e) => {
    const res = await GetApi(profile_url);

    if (res.status === 200) {
      setProfileInfo(res.data);
    } else {
      message.error("Sorry couldn't load profile info right now");
    }
  };

  useEffect(() => {
    init();
  }, []);

  const onFinish = async (values) => {
    console.log("Success:", values);
    values["futsal"] = futsalId.futsalID;

    const book_response = await AuthPostApi(BecomeMemberLink, values);
    const data = book_response.data;
    if (data.error_message) {
      message.error(data.error_message);
    } else if (book_response.status === 201) {
      message.success("Membership Registered");
    } else {
      message.error("Failed to become member");
    }
  };

  return (
    <>
      <div className="futsal-member">
        <Form
          {...formItemLayout}
          name="become-member"
          initialValues={profileInfo}
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item name="member_type" label="Member Type">
            <Radio.Group>
              <Radio value="Gold">Gold</Radio>
              <Radio value="Platinum">Platinum</Radio>
              <Radio value="Diamond">Diamond</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            {...tailFormItemLayout}
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <h6>
          <strong>Note :</strong>
          <em>&nbsp;Payment is to be done in cash</em>
        </h6>
      </div>
    </>
  );
};

export default BecomeMember;
