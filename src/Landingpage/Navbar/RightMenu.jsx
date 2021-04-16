import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Grid, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { sm } = useBreakpoint();
  return (
    <Menu mode={sm ? "horizontal" : "inline"}>
      <Menu.Item>
        <Link to="/settings" style={{ padding: "0" }}>
          {localStorage.length === 0 ? null : (
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                size={{
                  xs: 24,
                }}
                icon={<UserAddOutlined />}
              />

              <h5 style={{ fontWeight: "bold", lineHeight: "15px" }}>
                {localStorage.user_name}
              </h5>
            </div>
          )}
        </Link>
      </Menu.Item>
      {localStorage.length === 0 ? (
        <>
          <Menu.Item key="mail">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="/login">Sign in</Link>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item key="app">
          <Link to="/logout">Logout</Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default RightMenu;
