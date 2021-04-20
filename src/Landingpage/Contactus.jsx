import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React from "react";
import Iframe from "react-iframe";

const Contactus = () => {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <>
      <div className="futsal-contact-us">
        <h1>Get in touch with us</h1>

        <Row>
          <div className="futsal-contact-lower-container">
            <Col
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
            >
              <div className="futsal-address">
                <Card hoverable title="Let's Connect" style={{ width: 300 }}>
                  <h4 className="socialicons">
                    <FacebookFilled />
                    <TwitterCircleFilled />
                    <LinkedinFilled />
                    <InstagramFilled />
                  </h4>
                </Card>
                <Card hoverable title="Get in Touch" style={{ width: 300 }}>
                  <p>Samakhsuhi-26, Townplanning</p>
                  <p> PO BOX 44600 ,Kathmandu</p>
                </Card>
                <Card
                  hoverable
                  title="Mail us your queries"
                  style={{ width: 300 }}
                >
                  <p className="email-contact-us">
                    <MailFilled />
                    info@hamrofutsal.com
                  </p>
                </Card>
              </div>
            </Col>
            <Col
              className="futsal-google-map"
              xs={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
            >
              <Iframe
                className="contact-us-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.8699747349841!2d85.31460782923315!3d27.733340398923826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1989208f8c9f%3A0x116ed20f9e3429f6!2sHamro%20Futsal!5e0!3m2!1sen!2snp!4v1614556883973!5m2!1sen!2snp"
                width="400"
                height="450"
                style={{ border: "0", padding: "15px", margin: "10px" }}
                allowfullscreen=""
                loading="lazy"
              ></Iframe>
            </Col>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Contactus;
