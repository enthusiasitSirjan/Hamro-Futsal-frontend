import React from "react";
import { Row, Col, Card } from "antd";
import ourjourney from "../assets/ourjourney.png";
import ourstory from "../assets/our story.png";
import ourmission from "../assets/our mission.png";

const Aboutus = () => {
  return (
    <>
      <div className="about-us-futsal">
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
                  <p>Know about our journey</p>
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
                  <p>Know about our present situation</p>
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
                  <p>Know about our mission</p>
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
                  <p>Know about our Vision</p>
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
