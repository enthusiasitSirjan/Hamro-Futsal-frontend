import React, { useState, useEffect } from "react";
import { Avatar, Row, Col, message, Card } from "antd";
import AdminSidebar from "../Sidebar/AdminSidebar";
import { AllFutsalLink } from "../../Api/Endpoint";
import { GetApi } from "../../Api/Callapi";
import moment from "moment";
const { Meta } = Card;

const AllFutsal = () => {
  const [futsalData, setfutsalData] = useState();

  useEffect(() => {
    init();
  }, []);

  const init = async (e) => {
    const response = await GetApi(AllFutsalLink);
    if (response.status === 200) {
      const data = response.data;
      setfutsalData(data);
      message.success("List of All Futsals");
    } else {
      message.error("Failed to load users right now");
    }
  };
  return (
    <>
      <div className="admin-users-container">
        <Row gutter={25}>
          <Col>
            <AdminSidebar />
          </Col>
          <Col>
            <div
              className="admin-registered-users"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                gap: "40px",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              {futsalData
                ? futsalData.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      key={`futsal-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={<Avatar src={data && data.fut_image} />}
                          title={
                            <>
                              <span className="card-title">
                                {data && data.futsal_name}
                              </span>
                            </>
                          }
                        />
                        <Meta
                          style={{ fontFamily: "Karla", marginTop: "10px" }}
                          description={
                            <>
                              <p style={{ marginBottom: "4%" }}>
                                Registered On :{" "}
                                <strong>
                                  {moment(data && data.created_at).format(
                                    "YYYY-MM-DD"
                                  )}
                                </strong>
                              </p>
                              <p style={{ marginBottom: "4%" }}>
                                Owner :{" "}
                                <a
                                  href="##"
                                  style={{
                                    fontWeight: "bold",
                                    color: "green",
                                  }}
                                >
                                  {data && data.name}
                                </a>
                              </p>
                              <p style={{ marginBottom: "4%" }}>
                                Phone Number :{data && data.fut_phone}
                              </p>
                              <p style={{ marginBottom: "4%" }}>
                                Location : {data && data.address}
                              </p>
                              <p style={{ marginBottom: "4%" }}>
                                Futsal Type : {data && data.fut_type}
                              </p>
                            </>
                          }
                        />
                      </div>
                    </Card>
                  ))
                : null}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AllFutsal;
