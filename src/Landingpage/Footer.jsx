import React from "react";
import { Progress, Card, Tag } from "antd";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterCircleFilled,
  InstagramFilled,
} from "@ant-design/icons";
import logo from "../assets/logo.PNG";
import UserStat from "./UserStat";

const Footer = () => {
  return (
    <>
      <div className="futsal-footer">
        <Card hoverable bordered={true}>
          <div className="footer-main">
            <div className="footer-first">
              <h3>
                <strong>Hamro Futsal</strong>{" "}
              </h3>
              <blockquote>
                Hamro futsal is a evolution in the field of Nepali futsal
              </blockquote>
            </div>
            <div className="futsal-logo-footer">
              <UserStat />
            </div>
          </div>
          <div className="footer-body">
            <div className="footer-social-text">
              <h3>Stay Connected</h3>
              <div className="social-media-icons">
                <Tag icon={<TwitterCircleFilled />} color="#55acee">
                  Twitter
                </Tag>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                  Youtube
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                  Facebook
                </Tag>
                <Tag icon={<InstagramFilled />} color="#f47973">
                  Instagram
                </Tag>
              </div>
            </div>
            <div className="footer-tags">
              <h3>Tag us in social media</h3>
              <div class="futsal-tags">
                <Tag color="red">#futsal</Tag>

                <Tag color="orange">#nepal</Tag>
                <Tag color="gold">#nepalifutsal</Tag>

                <Tag color="green">#hamrofutsal</Tag>
                <Tag color="cyan">#lovefutsal</Tag>

                <Tag color="purple">#nepalfutsal</Tag>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            Copyright&copy; &nbsp;Hamro Futsal &nbsp;|&nbsp;Terms and
            Conditions&nbsp;|&nbsp; Privacy Policy
          </div>
        </Card>
      </div>
    </>
  );
};

export default Footer;
