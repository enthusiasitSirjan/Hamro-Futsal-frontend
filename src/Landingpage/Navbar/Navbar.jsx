import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import logo from "../../assets/logo.PNG";

const Navbar = () => {
  //   const [current, setCurrent] = useState("mail");
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Hamro-futsal"
            style={{ height: "50px", width: "150px" }}
          ></img>
        </Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Hamro Futsal"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
