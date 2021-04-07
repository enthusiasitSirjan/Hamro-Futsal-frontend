import React from "react";
import { Row, Col } from "antd";
import BookingStatusFutsal from "./BookingStatusFutsal";
import FutsalOwnerSidebar from "../Sidebar/FutsalOwnerSidebar";

const Bookings = () => {
  return (
    <div className="owner-bookings">
      <Row gutter={25}>
        <Col>
          <FutsalOwnerSidebar />
        </Col>
        <Col>
          <Row>
            <BookingStatusFutsal />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Bookings;
