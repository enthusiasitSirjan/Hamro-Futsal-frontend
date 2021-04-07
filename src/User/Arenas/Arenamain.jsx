import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Modal, message } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import ViewDetails from "./ViewDetails";
import BecomeMember from "./BecomeMember";
import BookNow from "./BookNow";
import { GetApi } from "../../Api/Callapi";
import { AllFutsalLink } from "../../Api/Endpoint";
const { Meta } = Card;

const Arenamain = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);

  const [futsalId, setFutsalId] = useState();

  const [futsalInfo, setFutsalInfo] = useState([]);

  const history = useHistory();

  const [Url, setUrl] = useState(AllFutsalLink);

  useEffect(() => {
    init();
  }, [Url]);

  const init = async (e) => {
    const response = await GetApi(Url);
    console.log(response);
    if (response.status === 200) {
      let responseData = response.data;
      if (responseData) {
        setFutsalInfo(responseData);
        console.log(futsalInfo);
      }
    } else {
      message.error("Sorry couldn't load futsal details right now");
    }
  };

  return (
    <>
      <div className="futsal-search-box">
        <div className="futsal-search-box-items">
          {futsalInfo
            ? futsalInfo.map((data, index) => (
                <Card
                  hoverable
                  style={{ width: 450 }}
                  key={`futsal-${index}`}
                  cover={<img alt="example" src={data && data.fut_image} />}
                  actions={[
                    <Button
                      shape="round"
                      size="small"
                      type="primary"
                      className="btn-color"
                      onClick={() => {
                        setModal1Visible(!modal1Visible);
                        setFutsalId(data && data.id);
                      }}
                    >
                      View Details
                    </Button>,
                    <Button
                      shape="round"
                      size="small"
                      type="primary"
                      className="btn-color"
                      onClick={() => {
                        setModal3Visible(!modal3Visible);
                        setFutsalId(data && data.id);
                      }}
                    >
                      Book Now
                    </Button>,
                    <Button
                      shape="round"
                      size="small"
                      type="primary"
                      className="btn-color"
                      onClick={() => {
                        setModal2Visible(!modal2Visible);
                        setFutsalId(data && data.id);
                      }}
                    >
                      Become Member
                    </Button>,
                  ]}
                >
                  <Meta
                    title={
                      <div className="type-and-title">
                        <h4>{data && data.futsal_name}</h4>
                        <h6>{data && data.fut_type}</h6>
                      </div>
                    }
                    description={
                      <div className="address-and-price">
                        <h5>
                          <ThunderboltOutlined />
                          &nbsp; {data && data.location}
                        </h5>
                        <p>Price : {data && data.futsal_rate} per/hr</p>
                      </div>
                    }
                  />
                </Card>
              ))
            : null}
        </div>
      </div>

      {/* View Details */}
      <Modal
        centered
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
        footer={null}
        // closable={false}
      >
        <ViewDetails futsalID={futsalId} />
      </Modal>

      {/* Become Member */}
      <Modal
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        footer={null}
        // closable={false}
      >
        <BecomeMember futsalID={futsalId} />
      </Modal>

      {/* Book Now */}
      <Modal
        centered
        visible={modal3Visible}
        onOk={() => setModal3Visible(false)}
        onCancel={() => setModal3Visible(false)}
        footer={null}
        // closable={false}
      >
        <BookNow futsalID={futsalId} />
      </Modal>
    </>
  );
};

export default Arenamain;
