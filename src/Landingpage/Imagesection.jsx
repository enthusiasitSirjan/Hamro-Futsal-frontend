import React from "react";
import { Row, Col, Input, Space } from "antd";
import futsalimg from "../assets/futsal-image-section.png";
import ReactTypingEffect from "react-typing-effect";

const Imagesection = () => {
  return (
    <>
      <Row>
        {/* <Col span={12}>
          <div className="image-section">
            <Image width={600} src={bgImg} alt="bg-imagesection"></Image>
          </div>
        </Col> */}
        <Col span={24}>
          <div className="image-section">
            <img src={futsalimg} alt="img"></img>
            <div className="search-futsal-arenas">
              <h1>We are Hamro Futsal </h1>
              <ReactTypingEffect
                speed={100}
                text={[
                  "We provide you News !!",
                  "We provide you Futsal arenas to book !!!",
                  "We provide you Information about different Futsal !!",
                  "We provide you Updates on Tournaments !!",
                ]}
                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1>
                      {text.split("").map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span
                            key={key}
                            style={i % 3 === 0 ? { color: "green" } : {}}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </h1>
                  );
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Imagesection;
