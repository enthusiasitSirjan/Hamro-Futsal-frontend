import React from "react";
import { Card } from "antd";

const LatestNews = ({ sidenewsImg, sideNewsHead, sideNewsPara }) => {
  return (
    <>
      <div>
        <Card hoverable>
          <div className="futsal-news-section">
            <div className="futsal-news-side-image">
              <img src={sidenewsImg} alt="Side-news-1" />
            </div>
            <div className="futsal-news-side-head">
              <h3>{sideNewsHead}</h3>
              <p>{sideNewsPara}</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default LatestNews;
