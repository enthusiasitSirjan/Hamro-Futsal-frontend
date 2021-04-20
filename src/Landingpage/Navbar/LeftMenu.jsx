import React from "react";
import { Link } from "react-router-dom";
import { Menu, Grid } from "antd";

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item>
        <Link to="/arenas" id="futsalarenas">
          Futsal Arenas
        </Link>
      </Menu.Item>

      <Menu.Item key="mail">
        <Link to="/news">News</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/training" id="trainings">
          Trainings
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
