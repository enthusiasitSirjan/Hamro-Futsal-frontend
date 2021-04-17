import { ThunderboltOutlined } from "@ant-design/icons";
import { LocationSearchingOutlined } from "@material-ui/icons";
import { Button, Card, Input, message, Modal, Rate, Select } from "antd";
import React, { useEffect, useState } from "react";
import { GetApi, PostApi } from "../../Api/Callapi";
import {
  AllFutsalLink,
  BothSideFutsalLink,
  FiveASideFutsalLink,
  SevenASideFutsalLink,
  AllFutsalRatingLink,
} from "../../Api/Endpoint";
import BecomeMember from "./BecomeMember";
import BookNow from "./BookNow";
import ViewDetails from "./ViewDetails";
const { Meta } = Card;

const { Search } = Input;
const { Option } = Select;

const Futsalarena = () => {
  const onSearchName = async (values) => {
    setUrl(AllFutsalLink + "?futsal_name=" + values);
  };
  const onSearchLocation = async (values) => {
    setUrl(AllFutsalLink + "?location=" + values);
  };
  const suffix = (
    <LocationSearchingOutlined
      style={{
        fontSize: 16,
        color: "#03a918",
      }}
    />
  );
  const onSearchPrice = async (values) => {
    setUrl(AllFutsalLink + "?futsal_rate=" + values);
  };

  function onChange(value) {
    if (value === "5A") {
      setUrl(FiveASideFutsalLink);
      message.success("List of 5A Side Futsals");
    } else if (value === "7A") {
      setUrl(SevenASideFutsalLink);
      message.success("List of 7A Side Futsals");
    } else if (value === "5A/7A") {
      setUrl(BothSideFutsalLink);
      message.success("List of 5A/7A Side Futsals");
    } else {
      setUrl(AllFutsalLink);
    }
  }

  function onBlur() {}

  function onFocus() {}

  function onSearchSelect(val) {}

  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);

  const [futsalId, setFutsalId] = useState();

  const [futsalInfo, setFutsalInfo] = useState([]);

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
      <div className="futsal-arena-container">
        <div className="futsal-search-main">
          <Card hoverable>
            <div className="futsal-search-body">
              <div className="futsal-search-alignment">
                <Search
                  placeholder="Type to Search Futsal"
                  name="searched_futsal"
                  onSearch={onSearchName}
                  style={{ width: 300 }}
                />

                <Search
                  placeholder="Type to Search location"
                  onSearch={onSearchLocation}
                  suffix={suffix}
                  style={{ width: 300 }}
                />
              </div>

              <div
                className="futsal-search-alignment"
                style={{ marginTop: "20px" }}
              >
                <Select
                  showSearch
                  style={{ width: 300 }}
                  placeholder="Select Type"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearchSelect}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="7A">7A</Option>
                  <Option value="5A">5A</Option>
                  <Option value="5A/7A">5A/7A</Option>
                </Select>
                <Search
                  placeholder="Type to Search Price"
                  onSearch={onSearchPrice}
                  style={{ width: 300 }}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="futsal-arena-details" style={{ marginTop: "20px" }}>
          <div className="futsal-search-box">
            <div className="futsal-search-box-items">
              {futsalInfo
                ? futsalInfo.map((data, index) => (
                    <Card
                      hoverable
                      style={{ width: 450 }}
                      key={`futsal-${index}`}
                      cover={
                        <img
                          alt="example"
                          style={{ height: "350px", width: "450px" }}
                          src={data && data.fut_image}
                        />
                      }
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
        </div>
      </div>
    </>
  );
};

export default Futsalarena;
