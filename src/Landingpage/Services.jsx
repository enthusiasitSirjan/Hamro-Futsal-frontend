import React from "react";
import { Card } from "antd";

import service1 from "../assets/news.png";
import service2 from "../assets/bookings.png";
import service3 from "../assets/futsal arenas.png";
import service4 from "../assets/form.png";
import service5 from "../assets/training.png";
import service6 from "../assets/information.png";

const Services = () => {
  return (
    <>
      <div className="services-landing-page">
        <h1>Services</h1>
        <div className="services-container">
          <div className="services-container-service">
            <Card hoverable>
              <div className="services-service">
                <div className="services-service-img">
                  <img src={service1} alt="services-1" />
                </div>
                <div className="services-service-content">
                  <h3>News</h3>
                  <p>We provide news</p>
                </div>
              </div>
            </Card>
          </div>
          <Card hoverable>
            <div className="services-container-service">
              <div className="services-service">
                <div className="services-service-img">
                  <img src={service2} alt="services-2" />
                </div>
                <div className="services-service-content">
                  <h3>Bookings</h3>
                  <p>We provide bookings</p>
                </div>
              </div>
            </div>
          </Card>

          <Card hoverable>
            <div className="services-container-service">
              <div className="services-service">
                <div className="services-service-img">
                  <img src={service3} alt="services-3" />
                </div>
                <div className="services-service-content">
                  <h3>Futsal Arenas</h3>
                  <p>We have futsal arenas </p>
                </div>
              </div>
            </div>
          </Card>

          <Card hoverable>
            <div className="services-container-service">
              <div className="services-service">
                <div className="services-service-img">
                  <img src={service4} alt="services-4" />
                </div>
                <div className="services-service-content">
                  <h3>Membership</h3>
                  <p>We provide membership</p>
                </div>
              </div>
            </div>
          </Card>

          <Card hoverable>
            <div className="services-container-service">
              <div className="services-service">
                <div className="services-service-img">
                  <img src={service5} alt="services-5" />
                </div>
                <div className="services-service-content">
                  <h3>Trainings</h3>
                  <p>We provide trainings</p>
                </div>
              </div>
            </div>
          </Card>

          <Card hoverable>
            <div className="services-container-service">
              <div className="services-service">
                <div className="services-service-img">
                  <img src={service6} alt="services-6" />
                </div>
                <div className="services-service-content">
                  <h3>Information</h3>
                  <p>We provide information on futsal</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Services;
