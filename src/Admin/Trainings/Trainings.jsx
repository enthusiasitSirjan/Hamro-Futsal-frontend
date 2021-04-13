import {
  LocationCityOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@material-ui/icons";
import { Card, message } from "antd";
import React, { useState, useEffect } from "react";
import Footer from "../../Landingpage/Footer";
import Navbar from "../../Landingpage/Navbar/Navbar";
import { ShowAllTrainingsLink } from "../../Api/Endpoint";
import { GetApi } from "../../Api/Callapi";

const Trainings = () => {
  const [trainingData, settrainingData] = useState();
  useEffect(() => {
    init();
  }, []);

  const init = async (e) => {
    const response = await GetApi(ShowAllTrainingsLink);
    if (response.status === 200) {
      const data = response.data;
      settrainingData(data);
      message.success("List of Trainings");
    } else {
      message.error("Failed to load training details right now");
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="futsal-training">
        <div className="futsal-training-header-contents">
          <h2>THE EDGE YOU HAVE BEEN LOOKING FOR</h2>
          <h4>Train with professionals</h4>
        </div>
      </div>
      <div className="futsal-training-container">
        <div className="futsal-training-main">
          <div className="futsal-training-box">
            {trainingData
              ? trainingData.map((data, index) => (
                  <Card hoverable>
                    <div className="training-card-main">
                      <div className="training-card-date">
                        <img
                          src={data && data.t_photo}
                          alt="training-pic"
                          style={{ height: "100px", width: "100px" }}
                        />
                      </div>
                      <div className="vl"></div>

                      <div className="training-card-Name">
                        <h2>{data && data.t_name}</h2>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <LocationCityOutlined />
                          <h4>{data && data.t_location}</h4>
                        </div>
                        <h4>Price :{data && data.t_price}</h4>
                      </div>
                      <div className="vl"></div>
                      <div
                        className="training-card-Name"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                        }}
                      >
                        <h4 style={{ fontSize: "16px" }}>
                          Age : {data && data.t_age}
                        </h4>
                        <h4 style={{ fontSize: "16px" }}>
                          Sessions : {data && data.t_sessions}
                        </h4>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <PhoneOutlined />
                          <h4 style={{ fontSize: "16px" }}>
                            {data && data.t_contact_phone}
                          </h4>
                        </div>
                        <div style={{ display: "flex", gap: "15px" }}>
                          <MailOutlined />
                          <h4 style={{ fontSize: "16px" }}>
                            {" "}
                            {data && data.t_email}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              : null}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Trainings;
