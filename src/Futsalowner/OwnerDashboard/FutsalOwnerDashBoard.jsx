import { Col, Row, Card, message } from "antd";
import React, { useState, useEffect } from "react";
import FutsalOwnerSidebar from "../Sidebar/FutsalOwnerSidebar";
import { MemberStatLinks, BookingStatLinks } from "../../Api/Endpoint";
import { GetApi } from "../../Api/Callapi";

const FutsalOwnerDashBoard = () => {
  const [memberStat, setmemberStat] = useState();
  const [bookingStat, setbookingStat] = useState();

  useEffect(() => {
    userCount();
    FutsalBookingCount();
  }, []);

  const userCount = async (e) => {
    const response = await GetApi(MemberStatLinks);
    if (response.status === 200) {
      const data = response.data;
      setmemberStat(data);
      // message.success("List of All Futsal Owners");
    } else {
      message.error("Failed to load booking data right now");
    }
  };
  const FutsalBookingCount = async (e) => {
    const response = await GetApi(BookingStatLinks);
    if (response.status === 200) {
      const data = response.data;
      setbookingStat(data);
      // message.success("List of All Futsal Owners");
    } else {
      message.error("Failed to load users right now");
    }
  };
  return (
    <>
      <div className="futsal-owner-dashboard">
        <Row gutter={25}>
          <Col>
            <FutsalOwnerSidebar />
          </Col>
          <Col>
            <Row style={{ marginBottom: "30px" }}>
              <div className="admin-info-main">
                <h1>Quick Stats</h1>
                <div className="admin-info-item">
                  <div>
                    <Card
                      hoverable
                      title="Pending members"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {memberStat && memberStat.PendingMembers}
                      </h1>
                    </Card>
                  </div>
                  <div>
                    <Card
                      hoverable
                      title="Valid Members"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {memberStat && memberStat.ValidMembers}
                      </h1>
                    </Card>
                  </div>
                  <div>
                    <Card
                      hoverable
                      title="Cancelled Members"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {memberStat && memberStat.CancelledMembers}
                      </h1>
                    </Card>
                  </div>
                </div>
              </div>
            </Row>
            <Row style={{ marginBottom: "30px" }}>
              <div className="admin-dashboard-main">
                <h1>Booking Status</h1>
                <div className="admin-dashboard-item">
                  <div>
                    <Card
                      hoverable
                      title="Pending Bookings"
                      style={{ width: 300 }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {bookingStat && bookingStat.PendingBookings}
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
                        {bookingStat && bookingStat.ValidBookings}
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
                        {bookingStat && bookingStat.CancelledBookings}
                      </h1>
                    </Card>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FutsalOwnerDashBoard;
