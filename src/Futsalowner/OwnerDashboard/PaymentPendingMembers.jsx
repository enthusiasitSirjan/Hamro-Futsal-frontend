import { Card, message, Modal, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { MembershipStatusLink, ShowMembersLink } from "../../Api/Endpoint";
import { GetApi, PatchApi, PostApi } from "../../Api/Callapi";
import ConfirmMembership from "./ConfirmMembership";
const { Meta } = Card;

const PaymentPendingMembers = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    init();
  }, []);
  const init = async () => {
    const res = await GetApi(ShowMembersLink);

    if (res.status === 200) {
      setLoadData(res.data);
    } else {
      message.error("Something went wrong");
    }
    console.log(res);
  };
  const [memberId, setmemberId] = useState();
  const [memberStatus, setmemberStatus] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const handleCard = (id) => {
    setModalVisible(true);
  };
  // };

  return (
    <>
      <div
        className="owner-pending-members"
        style={{
          display: "grid",
          gridTemplateColumns: "25% 25% 25% 25%",
          gap: "40px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {loadData
          ? loadData.map((data, index) => (
              <Card
                hoverable
                className="card-box"
                onClick={() => {
                  handleCard();
                  setmemberId(data && data.id);
                  setmemberStatus(data && data.pay_status);
                }}
                key={`booking-${index}`}
              >
                <div className="title-description">
                  <Meta
                    // avatar={<Avatar src="random.png" />}
                    title={
                      <>
                        <span className="card-title">{data && data.name}</span>
                      </>
                    }
                    description={
                      <>
                        <span>
                          {data.pay_status === "Approved" ? (
                            <Tag color="green">{data.pay_status}</Tag>
                          ) : null}

                          {data.pay_status === "Cancelled" ? (
                            <Tag color="red">{data.pay_status}</Tag>
                          ) : null}

                          {data.pay_status === "Pending" ? (
                            <Tag color="orange">{data.pay_status}</Tag>
                          ) : null}
                        </span>
                      </>
                    }
                  />
                  <Meta
                    style={{ fontFamily: "Karla", marginTop: "10px" }}
                    description={
                      <>
                        <p style={{ marginBottom: "4%" }}>
                          Submitted On :{" "}
                          <strong>
                            {moment(data && data.created_at).format(
                              "YYYY-MM-DD"
                            )}
                          </strong>
                        </p>
                        <p style={{ marginBottom: "4%" }}>
                          Status :{" "}
                          <a
                            href="##"
                            style={{ fontWeight: "bold", color: "#ad77c0" }}
                          >
                            {data && data.pay_status}
                          </a>
                        </p>
                        <p style={{ marginBottom: "4%" }}>
                          Phone No :{data && data.phone_number}
                        </p>
                        <p style={{ marginBottom: "4%" }}>
                          Email :{data && data.email}
                        </p>
                        <p style={{ marginBottom: "4%" }}>
                          Membership Type : {data && data.member_type}
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
          <ConfirmMembership memberId={memberId} memberStatus={memberStatus} />
        </Modal>
      </div>
    </>
  );
};

export default PaymentPendingMembers;
