import { message, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GetApi } from "../../Api/Callapi";
import { MyBookingsLink } from "../../Api/Endpoint";

const MyBookings = () => {
  const columns = [
    {
      title: "Date",
      dataIndex: "created_at",
    },
    {
      title: "Futsal",
      dataIndex: "futsal_name",
    },
    {
      title: "Booked Date",
      dataIndex: "user_book_date",
    },
    {
      title: "Booked Time",
      dataIndex: "user_book_time",
    },
    {
      title: "Futsal Type",
      dataIndex: "user_book_fut_type",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: function (status) {
        return (
          <>
            {status === "Pending" ? (
              <>
                <Tag color="orange">Pending</Tag>
              </>
            ) : null}
            {status === "Approved" ? (
              <>
                <Tag color="green">Approved</Tag>
              </>
            ) : null}
            {status === "Cancelled" ? (
              <>
                <Tag color="red">Cancelled</Tag>
              </>
            ) : null}
          </>
        );
      },
    },
  ];
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    const init = async () => {
      const res = await GetApi(MyBookingsLink);

      if (res.status === 200) {
        setLoadData(res.data);
      } else {
        message.error("Something went wrong");
      }
      console.log(res);
    };
    init();
  }, []);
  return (
    <>
      <Row>
        <div className="user-booking-table">
          <Table
            columns={columns}
            dataSource={loadData}
            pagination={false}
            tableLayout="fixed"
            size="middle"
          />
        </div>
      </Row>
    </>
  );
};

export default MyBookings;
