import { Button, Form, message, Modal, Radio, Select, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "react-clock/dist/Clock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import "react-time-picker/dist/TimePicker.css";
import { AuthPostApi, GetApi } from "../../Api/Callapi";
import {
  BookFutsalLink,
  FutsalRateLink,
  UserProfileLink,
} from "../../Api/Endpoint";

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

const BookNow = (futsalId) => {
  const UserID = localStorage.getItem("user_id" || "");
  const [profileInfo, setProfileInfo] = useState({});
  const [visible, setVisible] = useState(false);

  console.log("futsal id ", futsalId);
  useEffect(() => {
    init();
  }, []);

  const profile_url = UserProfileLink + UserID;

  const init = async (e) => {
    const res = await GetApi(profile_url);

    if (res.status === 200) {
      setProfileInfo(res.data);
    } else {
      message.error("Sorry couldn't load profile info right now");
    }
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    values["user_book_date"] = moment(values["user_book_date"]).format(
      "YYYY-MM-DD"
    );
    values["futsal"] = futsalId.futsalID;

    const book_response = await AuthPostApi(BookFutsalLink, values);
    const data = book_response.data;
    if (data.error_message) {
      message.error(data.error_message);
    } else if (book_response.status === 201) {
      message.success("Booking Registered");
      showModal();
    } else if (book_response.status === 400) {
      message.error("Failed to book");
    }
  };
  const [startDate, setStartDate] = useState(new Date());

  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const [futsalRate, setfutsalRate] = useState({});

  const onFutsalRateFinish = async (values) => {
    console.log("Success FutsalRate:", values);
    values["futsal_id"] = futsalId.futsalID;

    const book_response = await AuthPostApi(FutsalRateLink, values);
    const data = book_response.data;
    if (data.error_message) {
      message.error(data.error_message);
    } else if (book_response.status === 200) {
      setfutsalRate(data);
      showPriceModal();
      setVisible(false);
    } else if (book_response.status === 400) {
      message.error("Failed to show total");
    }
  };

  const onFinishFutsalRateFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showPriceModal = () => {
    setIsModalVisible(true);
  };

  const handlePriceOk = () => {
    setIsModalVisible(false);
  };

  const handlePriceCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="futsal-book-now">
        <Form {...formItemLayout} onFinish={onFinish} scrollToFirstError>
          <Form.Item
            name="user_book_date"
            label="Pick your Date"
            rules={[
              {
                required: true,
                message: "Please Select Date",
              },
            ]}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Item>

          <Form.Item
            label="Pick your time"
            name="user_book_time"
            rules={[
              {
                required: true,
                message: "Please Select time slot",
              },
            ]}
          >
            <Select>
              <Select.Option value="6 AM -7 AM">6 AM - 7 AM</Select.Option>
              <Select.Option value="7 AM -8 AM">7 AM - 8 AM</Select.Option>
              <Select.Option value="8 AM -9 AM">8 AM - 9 AM</Select.Option>
              <Select.Option value="9 AM -10 AM">9 AM - 10 AM</Select.Option>
              <Select.Option value="10 AM -11 AM">10 AM - 11 AM</Select.Option>
              <Select.Option value="11 AM -12 PM">11 AM - 12 PM</Select.Option>
              <Select.Option value="12 PM -1 PM">12 PM - 1 PM</Select.Option>
              <Select.Option value="1 PM -2 PM">1 PM - 2 PM</Select.Option>
              <Select.Option value="2 PM -3 PM">2 PM - 3 PM</Select.Option>
              <Select.Option value="3 PM -4 PM">3 PM - 4 PM</Select.Option>
              <Select.Option value="4 PM -5 PM">4 PM - 5 PM</Select.Option>
              <Select.Option value="5 PM -6 PM">5 PM -6 PM</Select.Option>
              <Select.Option value="6 PM -7 PM">6 PM -7 PM</Select.Option>
              <Select.Option value="7 PM -8 PM">7 PM -8 PM</Select.Option>
              <Select.Option value="8 PM -9 PM">8 PM -9 PM</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="user_book_fut_type"
            label="Type"
            rules={[
              {
                required: true,
                message: "Please Select type",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="5A">5A</Radio>
              <Radio value="7A">7A</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Book
            </Button>
          </Form.Item>
        </Form>
        <Modal
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          footer={false}
        >
          Thank you for booking
          <Form
            onFinish={onFutsalRateFinish}
            onFinishFailed={onFinishFutsalRateFailed}
          >
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  display: "flex",
                  margin: "auto",
                  padding: "20px",
                }}
              >
                See Total
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          visible={isModalVisible}
          onOk={handlePriceOk}
          onCancel={handlePriceCancel}
        >
          {futsalRate.member_type ? (
            <p>
              Member Type :{" "}
              {futsalRate && futsalRate.member_type === "Gold" ? (
                <Tag color="gold">Gold</Tag>
              ) : null}
              {futsalRate && futsalRate.member_type === "Platinum" ? (
                <Tag color="geekblue">Platinum</Tag>
              ) : null}
              {futsalRate && futsalRate.member_type === "Diamond" ? (
                <Tag color="purple">Diamond</Tag>
              ) : null}
            </p>
          ) : (
            <p>
              Member Type : <Tag color="#f50">No Membership</Tag>
            </p>
          )}
          <p>Price : Rs {futsalRate && futsalRate.price}</p>
          <p>Discount : {futsalRate && futsalRate.discount} %</p>
          <p>
            Total : Rs <strong>{futsalRate && futsalRate.Total}</strong>
          </p>
        </Modal>
        <h6>
          <strong>Note :</strong>
          <em>&nbsp;Payment is to be done in cash</em>
        </h6>
      </div>
    </>
  );
};

export default BookNow;
