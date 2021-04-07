import React, { useState } from "react";
import { Menu, Button } from "antd";
import { NavLink } from "react-router-dom";
import {
  DashboardFilled,
  UsergroupAddOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartFilled,
  LogoutOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

const FutsalOwnerSidebar = () => {
  let url = window.location.href;
  url = url.substring(url.lastIndexOf("/") + 1);
  const [active, setActive] = useState("1");
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const aClick = (e) => {
    // console.log(e.key)
    setActive(e.key);
  };

  return (
    <>
      {/* Sidebar */}

      <div style={{ width: 256, padding: "10px 0 0 30px" }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <h5>{localStorage.user_name}</h5>

        <Menu
          className="side-menu-options"
          mode="inline"
          inlineCollapsed={collapsed}
          onClick={aClick}
        >
          <Menu.Item
            className={url === "registration" ? "ant-menu-item-selected" : null}
            key="6"
          >
            <NavLink to="/futsal/register" className="side-menu-link">
              <span>
                <SnippetsOutlined />
                <span>Futsal Registration</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "dashboard" ? "ant-menu-item-selected" : null}
            key="1"
          >
            <NavLink to="/owner/dashboard" className="side-menu-link">
              <span>
                <DashboardFilled />
                <span>Dashboard</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "members" ? "ant-menu-item-selected" : null}
            key="2"
          >
            <NavLink to="/owner/members" className="side-menu-link">
              <span>
                <UsergroupAddOutlined />
                <span>Members</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "bookings" ? "ant-menu-item-selected" : null}
            key="3"
          >
            <NavLink to="/owner/bookings" className="side-menu-link">
              <span>
                <PieChartFilled />
                <span>Bookings</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "settings" ? "ant-menu-item-selected" : null}
            key="4"
          >
            <NavLink to="/owner/settings" className="side-menu-link">
              <span>
                <PieChartFilled />
                <span>Settings</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "logout" ? "ant-menu-item-selected" : null}
            key="5"
          >
            <NavLink to="/logout" className="side-menu-link">
              <span>
                <LogoutOutlined />
                <span>Logout</span>
              </span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default FutsalOwnerSidebar;
