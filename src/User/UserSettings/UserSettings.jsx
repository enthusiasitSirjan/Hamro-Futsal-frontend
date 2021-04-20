import React, { useState } from "react";
import "./UserSettings.css";
import AccountSettings from "./AccountSettings";
import ProfileSettings from "./ProfileSettings";
import Navbar from "../../Landingpage/Navbar/Navbar";
import MyBookings from "./MyBookings";

const UserSettings = () => {
  const [active, setActive] = useState("profile");
  let content = null;
  if (active === "account") {
    content = <AccountSettings />;
  } else if (active === "profile") {
    content = <ProfileSettings />;
  } else if (active === "bookings") {
    content = <MyBookings />;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px 3%",
          }}
        >
          <div className="view-profile-grid">
            <div className="four-buttons">
              <button
                className={active === "account" ? "active" : null}
                onClick={() => setActive("account")}
              >
                Account Settings
              </button>
              <button
                id="profileSettings"
                className={active === "profile" ? "active" : null}
                onClick={() => setActive("profile")}
              >
                Profile Settings
              </button>
              <button
                className={active === "bookings" ? "active" : null}
                onClick={() => setActive("bookings")}
              >
                My Bookings
              </button>
            </div>
            {content}
          </div>
        </section>
      </div>
    </>
  );
};

export default UserSettings;
