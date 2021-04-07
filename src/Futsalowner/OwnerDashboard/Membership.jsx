import { Col, Row } from "antd";
import React from "react";
import FutsalOwnerSidebar from "../Sidebar/FutsalOwnerSidebar";
import PaymentPendingMembers from "./PaymentPendingMembers";

const Membership = () => {
  return (
    <>
      <div className="owner-membership">
        <Row gutter={25}>
          <Col>
            <FutsalOwnerSidebar />
          </Col>
          <Col>
            <Row>
              <PaymentPendingMembers />
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Membership;
