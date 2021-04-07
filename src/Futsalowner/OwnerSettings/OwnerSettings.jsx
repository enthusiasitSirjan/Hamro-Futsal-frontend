import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Input, message, Row } from "antd";
import OwnerAccountSettings from "./OwnerAccountSettings";
import OwnerProfileSettings from "./OwnerProfileSettings";
import OwnerFutsalSettings from "./OwnerFutsalSettings";
import "./OwnerSettings.css";
import FutsalOwnerSidebar from "../Sidebar/FutsalOwnerSidebar";

const OwnerSettings = () => {
  const [active, setActive] = useState("account");
  let content = null;
  if (active === "account") {
    content = <OwnerAccountSettings />;
  } else if (active === "profile") {
    content = <OwnerProfileSettings />;
  } else if (active === "futsal") {
    content = <OwnerFutsalSettings />;
  }
  return (
    <>
      <div className="admin-dashboard-container">
        <Row gutter={25}>
          <Col>
            <FutsalOwnerSidebar />
          </Col>
          <Col>
            <div>
              <section>
                <div className="view-profile-grid">
                  <div className="btn-1">Settings</div>

                  <div className="four-buttons">
                    <button
                      className={active === "account" ? "active" : null}
                      onClick={() => setActive("account")}
                    >
                      Account Settings
                    </button>
                    <button
                      className={active === "profile" ? "active" : null}
                      onClick={() => setActive("profile")}
                    >
                      Profile Settings
                    </button>
                    <button
                      className={active === "futsal" ? "active" : null}
                      onClick={() => setActive("futsal")}
                    >
                      Futsal Settings
                    </button>
                  </div>
                  {content}
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OwnerSettings;
