import { Card, message, Modal, Tag } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { GetApi } from "../../Api/Callapi";
import { ShowMyBookingsLink } from "../../Api/Endpoint";
import ConfirmBooking from "./ConfirmBooking";
const { Meta } = Card;

const BookingStatusFutsal = () => {
  useEffect(() => {
    const init = async () => {
      const res = await GetApi(ShowMyBookingsLink);

      if (res.status === 200) {
        const bookData = res.data;
        setLoadData(bookData);
      } else {
        message.error("Something went wrong");
      }
      console.log(res);
    };
    init();
  }, []);
  const [loadData, setLoadData] = useState([]);

  const [bookid, setbookId] = useState();
  const [bookstatus, setbookStatus] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const handleCard = (id) => {
    setModalVisible(true);
  };
  return (
    <div
      className="owner-booking-status"
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
                setbookId(data && data.id);
                setbookStatus(data && data.status);
              }}
              actions={
                [
                  // <p className="reward">${data && data.name}</p>,
                  // <p className="points">{data && data.points} Pts</p>,
                ]
              }
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
                      {/* <p className="company-name">Nassec</p> */}
                      <span>
                        {data.status === "Approved" ? (
                          <Tag color="green">{data.status}</Tag>
                        ) : null}

                        {data.status === "Cancelled" ? (
                          <Tag color="red">{data.status}</Tag>
                        ) : null}

                        {data.status === "Pending" ? (
                          <Tag color="orange">{data.status}</Tag>
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
                          {moment(data && data.created_at).format("YYYY-MM-DD")}
                        </strong>
                      </p>
                      <p style={{ marginBottom: "4%" }}>
                        Status :{" "}
                        <a
                          href="##"
                          style={{ fontWeight: "bold", color: "#ad77c0" }}
                        >
                          {data && data.status}
                        </a>
                      </p>
                      <p style={{ marginBottom: "4%" }}>
                        Booked Time : {data && data.user_book_time}
                      </p>
                      <p style={{ marginBottom: "4%" }}>
                        Booked Date :{data && data.user_book_date}
                      </p>
                      <p style={{ marginBottom: "4%" }}>
                        Futsal Type :{data && data.user_book_fut_type}
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
        <ConfirmBooking bookid={bookid} bookstatus={bookstatus} />
      </Modal>
    </div>
  );
};

export default BookingStatusFutsal;
