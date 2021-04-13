import { Card, message } from "antd";
import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { GetApi } from "../../Api/Callapi";
import { FutsalDetailsLink } from "../../Api/Endpoint";

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
            <Card hoverable>
              <div className="futsal-time-slots">
                <ul className="list-unstyled">
                  <li>
                    <label>Weekdays(Sun,Mon,Tue,Wed,Thur,Fri)</label>
                  </li>
                  <li>
                    <label>6:00 am -10:00 am</label>
                    <label>Rs{futsalData && futsalData.futsal_rate}</label>
                    <small>per/hour</small>
                  </li>

                  <li>
                    <label>11:00 am -3:00 pm</label>
                    <label>Rs{futsalData && futsalData.futsal_rate} </label>
                    <small>per/hour</small>
                  </li>

                  <li>
                    <label>3:00 pm -10:00 pm</label>
                    <label>Rs{futsalData && futsalData.futsal_rate} </label>
                    <small>per/hour</small>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <label>Saturday</label>
                  </li>
                  <li>
                    <label>6:00 am -10:00 am</label>
                    <label>Rs{futsalData && futsalData.futsal_rate}</label>
                    <small>per/hour</small>
                  </li>

                  <li>
                    <label>6:00 am -10:00 am</label>
                    <label>Rs {futsalData && futsalData.futsal_rate}</label>
                    <small>per/hour</small>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
