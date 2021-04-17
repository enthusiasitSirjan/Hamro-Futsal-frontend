import { Card, message, Button, Rate, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { GetApi, PostApi, AuthPostApi } from "../../Api/Callapi";
import {
  FutsalDetailsLink,
  AllFutsalRatingLink,
  CreateFutsalRatingLink,
} from "../../Api/Endpoint";
import payment from "../../assets/payment.PNG";

const ViewDetails = (futsalId) => {
  const [futsalData, setfutsalData] = useState();
  // const [reload, setReload] = useState(false);

  console.log("futsal id ", futsalId);

  useEffect(() => {
    init();
  }, [futsalId]);

  const init = async (e) => {
    const futsal_url = FutsalDetailsLink + futsalId.futsalID;
    const res = await GetApi(futsal_url);

    if (res.status === 200) {
      setfutsalData(res.data);
    } else {
      message.error("Sorry couldn't load futsal details info right now");
    }
  };
  const [rating, setRating] = useState();
  const onFinish = async (values) => {
    setVisible(true);

    console.log("Success:", values);
    const rating_url = AllFutsalRatingLink;
    values["futsalId"] = futsalId.futsalID;
    const response = await PostApi(rating_url, values);
    console.log(response);
    if (response.status === 200) {
      let responseData = response.data;
      if (responseData) {
        setRating(responseData.avg_rating);
      }
    } else {
      message.error("Sorry couldn't load futsal details right now");
    }
  };
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const [userRating, setuserRating] = useState();
  const RateFutsal = async (values) => {
    console.log("Success:", values);
    const user_rating_url = CreateFutsalRatingLink;
    values["futsal"] = futsalId.futsalID;
    const response = await AuthPostApi(user_rating_url, values);
    console.log(response);
    if (response.status === 201) {
      let responseData = response.data;
      if (responseData) {
        setuserRating(responseData.stars);
      }
      message.info("Thank you for your review");
    } else {
      message.error("Failed to review");
    }
  };
  return (
    <>
      <div className="view-details-container">
        <div className="view-details-main">
          <div className="view-details-body">
            <div className="futsal-description">
              <h2>{futsalData && futsalData.futsal_name}</h2>
              <p>{futsalData && futsalData.description}</p>
            </div>
            <div className="futsal-contact">
              <h2>Contact here</h2>
              <p>{futsalData && futsalData.contact_email}</p>
            </div>
          </div>

          <div className="view-details-body">
            <Card>
              <div className="futsal-time-slots">
                <ul className="list-unstyled">
                  <li>
                    <label>Weekdays(Sun,Mon,Tue,Wed,Thur,Fri)</label>
                  </li>
                  <li>
                    <label>6:00 am -10:00 am</label>
                  </li>

                  <li>
                    <label>11:00 am -3:00 pm</label>
                  </li>

                  <li>
                    <label>3:00 pm -10:00 pm</label>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <label>Saturday</label>
                  </li>
                  <li>
                    <label>6:00 am -10:00 am</label>
                  </li>

                  <li>
                    <label>6:00 am -10:00 am</label>
                  </li>
                </ul>
              </div>
            </Card>

            <div className="futsal-location">
              <Iframe
                className="contact-us-map"
                src={futsalData && futsalData.fut_map}
                width="300"
                height="150"
                style={{ border: "0", padding: "15px", margin: "10px" }}
                allowfullscreen=""
                loading="lazy"
              ></Iframe>
            </div>
            <Form onFinish={onFinish}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  See Reviews and Payment method
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
              <h4>User Rating</h4>
              {rating ? (
                <div>
                  <Rate allowHalf value={rating} />
                </div>
              ) : (
                "No reviews"
              )}
              <div style={{ marginTop: "20px" }}>
                <Form onFinish={RateFutsal}>
                  <h5>Rate {futsalData && futsalData.futsal_name}</h5>
                  <Form.Item name="stars">
                    <Rate />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Rate
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <p>Note : You cannot review futsal more than once</p>
              <div>
                <Card title="Payment Method">
                  <img src={payment} alt="payment-method"></img>
                </Card>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
