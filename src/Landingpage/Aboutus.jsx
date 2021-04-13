import React from "react";
import { Row, Col, Card } from "antd";
import ourjourney from "../assets/ourjourney.png";
import ourstory from "../assets/our story.png";
import ourmission from "../assets/our mission.png";

const Aboutus = () => {
  return (
    <>
      <div className="about-us-futsal" style={{ marginBottom: "20px" }}>
        <h1>Who we are?</h1>
        <Row>
          <Col span={24} className="about-us-head">
            <div className="cards-container">
              <div className="cards-card">
                <img src={ourjourney} alt="Our-Journey" />
                <Card
                  hoverable
                  title="OUR JOURNEY"
                  bordered={false}
                  style={{ width: 200 }}
                >
                  <p style={{ color: "black" }}>
                    We started from 2021 to solve online booking registration
                    and management through one desk.
                  </p>
                </Card>
              </div>
              <div className="cards-card">
                <img src={ourstory} alt="Our-Present story" />
                <Card
                  hoverable
                  title="PRESENT SITUATION"
                  bordered={false}
                  style={{ width: 200 }}
                >
                  <p style={{ color: "black" }}>
                    We are currrently developing network all over Nepal to
                    eradicate traditional bookings and management
                  </p>
                </Card>
              </div>
              <div className="cards-card">
                <img src={ourmission} alt="Our-Missions" />
                <Card
                  hoverable
                  title="OUR MISSION"
                  bordered={false}
                  style={{ width: 200 }}
                >
                  <p style={{ color: "black" }}>
                    There is only one mission to make booking and its management
                    as simple as it can be
                  </p>
                </Card>
              </div>
              <div className="cards-card">
                <img src={ourmission} alt="Our-Missions" />
                <Card
                  hoverable
                  title="OUR VISION"
                  bordered={false}
                  style={{ width: 200 }}
                >
                  <p style={{ color: "black" }}>
                    We are trying our best and our vision is to make Nepal a
                    digitalized World of its own
                  </p>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Aboutus;
