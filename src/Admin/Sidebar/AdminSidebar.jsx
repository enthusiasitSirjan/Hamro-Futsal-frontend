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
  ScheduleOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const AdminSidebar = () => {
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
            className={url === "dashboard" ? "ant-menu-item-selected" : null}
            key="1"
          >
            <NavLink to="/admin/dashboard" className="side-menu-link">
              <span>
                <DashboardFilled />
                <span>Dashboard</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "users" ? "ant-menu-item-selected" : null}
            key="2"
          >
            <NavLink to="/admin/users" className="side-menu-link">
              <span>
                <UsergroupAddOutlined />
                <span>Users</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "owners" ? "ant-menu-item-selected" : null}
            key="3"
          >
            <NavLink to="/admin/owners" className="side-menu-link">
              <span>
                <PieChartFilled />
                <span>Futsal Owners</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "futsal" ? "ant-menu-item-selected" : null}
            key="4"
          >
            <NavLink to="/admin/futsal" className="side-menu-link">
              <span>
                <PieChartFilled />
                <span>Futsals</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={
              url === "add_trainings" ? "ant-menu-item-selected" : null
            }
            key="5"
          >
            <NavLink to="/add_trainings" className="side-menu-link">
              <span>
                <ScheduleOutlined />
                <span>Add Training</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={
              url === "add_tournaments" ? "ant-menu-item-selected" : null
            }
            key="6"
          >
            <NavLink to="/add_tournaments" className="side-menu-link">
              <span>
                <AppstoreAddOutlined />
                <span>Add Tournaments</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={url === "logout" ? "ant-menu-item-selected" : null}
            key="7"
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

export default AdminSidebar;
