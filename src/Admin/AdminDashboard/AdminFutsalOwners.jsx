import { Card, Col, message, Modal, Row, Avatar } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { GetApi } from "../../Api/Callapi";
import { AllFutsalOwnerAccounts } from "../../Api/Endpoint";
import AdminSidebar from "../Sidebar/AdminSidebar";
import DeleteOwner from "./DeleteOwner";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

const AdminFutsalOwners = () => {
  const [ownerData, setownerData] = useState();
  const [ownerId, setownerId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    init();
  }, []);

  const init = async (e) => {
    const response = await GetApi(AllFutsalOwnerAccounts);
    if (response.status === 200) {
      const data = response.data;
      setownerData(data);
      message.success("List of All Futsal Owners");
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
      <div className="admin-dashboard-container">
        <Row gutter={25}>
          <Col>
            <AdminSidebar />
          </Col>
          <Col style={{ width: "80%" }}>
            <div
              className="admin-registered-owners"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                gap: "40px",
                margin: "auto",
                marginTop: "30px",
              }}
            >
              {ownerData
                ? ownerData.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      onClick={() => {
                        handleCard();
                        setownerId(data && data.id);
                      }}
                      key={`owner-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={
                            data && data.fut_image ? (
                              <UserOutlined />
                            ) : (
                              <Avatar src={data && data.photo} />
                            )
                          }
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
                <DeleteOwner ownerId={ownerId} />
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminFutsalOwners;
