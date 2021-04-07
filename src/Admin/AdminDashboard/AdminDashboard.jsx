import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, Button, Space, message, Tag } from "antd";
import {
  AllBookingStats,
  AllUserCount,
  AdminBookingLink,
} from "../../Api/Endpoint";
import { GetApi } from "../../Api/Callapi";
import AdminSidebar from "../Sidebar/AdminSidebar";

const AdminDashboard = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
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
  const [totalStat, settotalStat] = useState();
  const [totalUser, settotalUser] = useState();
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    init();
    userCount();
    FutsalBookingCount();
  }, []);

  const userCount = async (e) => {
    const response = await GetApi(AllBookingStats);
    if (response.status === 200) {
      const data = response.data;
      settotalStat(data);
      // message.success("List of All Futsal Owners");
    } else {
      message.error("Failed to load booking data right now");
    }
  };
  const FutsalBookingCount = async (e) => {
    const response = await GetApi(AllUserCount);
    if (response.status === 200) {
      const data = response.data;
      settotalUser(data);
      // message.success("List of All Futsal Owners");
    } else {
      message.error("Failed to load users right now");
    }
  };
  const init = async (e) => {
    const res = await GetApi(AdminBookingLink);

    if (res.status === 200) {
      setLoadData(res.data);
    } else {
      message.error("Something went wrong");
    }
    console.log(res);
  };
  return (
    <>
      {/* Sidebar */}
      <div className="admin-dashboard-container">
        <Row gutter={25}>
          <Col>
            <AdminSidebar />
          </Col>
          <Col>
            <Row style={{ marginBottom: "30px" }}>
              <div className="admin-info-main">
                <h1>Quick Stats</h1>
                <div className="admin-info-item">
                  <div>
                    <Card
                      hoverable
                      title="Number of users"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {totalUser && totalUser.TotalUser}
                      </h1>
                    </Card>
                  </div>
                  <div>
                    <Card
                      hoverable
                      title="Number of Futsal Owner"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {totalUser && totalUser.TotalFutsalOwner}
                      </h1>
                    </Card>
                  </div>
                  <div>
                    <Card hoverable title="Total Futsal" style={{ width: 300 }}>
                      <h1 style={{ textAlign: "center" }}>
                        {totalUser && totalUser.TotalFutsal}
                      </h1>
                    </Card>
                  </div>
                </div>
              </div>
            </Row>
            <Row style={{ marginBottom: "30px" }}>
              <div className="admin-dashboard-main">
                <h1>Your Dashboard</h1>
                <div className="admin-dashboard-item">
                  <div>
                    <Card
                      hoverable
                      title="Pending Bookings"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {totalStat && totalStat.TotalBookings}
                      </h1>
                    </Card>
                  </div>
                  <div>
                    <Card
                      hoverable
                      title="Approved Bookings"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {totalStat && totalStat.TotalValidBookings}
                      </h1>
                    </Card>
                  </div>
                  <div>
                    <Card
                      hoverable
                      title="Cancelled Bookings"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {totalStat && totalStat.TotalCancelledBookings}
                      </h1>
                    </Card>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <Table
                columns={columns}
                dataSource={loadData}
                pagination={false}
                // tableLayout="fixed"
                size="middle"
              />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AdminDashboard;
