import React, { useState, useEffect } from "react";
import { Modal, Row, Col, message, Card } from "antd";
import AdminSidebar from "../Sidebar/AdminSidebar";
import { AllUserAccounts } from "../../Api/Endpoint";
import { GetApi } from "../../Api/Callapi";
import moment from "moment";
import DeleteUser from "./DeleteUser";

const { Meta } = Card;

const AdminUsers = () => {
  const [userData, setuserData] = useState();
  const [userId, setUserId] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async (e) => {
    const response = await GetApi(AllUserAccounts);
    if (response.status === 200) {
      const data = response.data;
      setuserData(data);
      message.success("List of All users");
    } else {
      message.error("Failed to load users right now");
    }
  };
  const handleCard = (id) => {
    setModalVisible(true);
  };

  return (
    <>
      {/* Sidebar */}
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
              {userData
                ? userData.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      onClick={() => {
                        handleCard();
                        setUserId(data && data.id);
                      }}
                      key={`booking-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          // avatar={ <Avatar src="random.png" />}
                          title={
                            <>
                              <span className="card-title">
                                {data && data.name}
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
                                Phone :{" "}
                                <a
                                  href="##"
                                  style={{
                                    fontWeight: "bold",
                                    color: "green",
                                  }}
                                >
                                  {data && data.phone_number}
                                </a>
                              </p>
                              <p style={{ marginBottom: "4%" }}>
                                Email :{data && data.email}
                              </p>
                              <p style={{ marginBottom: "4%" }}>
                                Address : {data && data.address}
                              </p>
                            </>
                          }
                        />
                      </div>
                    </Card>
                  ))
                : null}
              <Modal
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
                closable={false}
                footer={null}
              >
                <DeleteUser userId={userId} />
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminUsers;
