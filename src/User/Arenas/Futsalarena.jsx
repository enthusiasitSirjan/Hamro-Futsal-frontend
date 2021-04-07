import { LocationSearchingOutlined } from "@material-ui/icons";
import { Card, Input, Select, Slider } from "antd";
import React from "react";
import Arenamain from "./Arenamain";

const { Search } = Input;
const { Option } = Select;

const Futsalarena = () => {
  const onSearchName = (value1) => console.log(value1);
  const onSearchLocation = (value2) => console.log(value2);
  const suffix = (
    <LocationSearchingOutlined
      style={{
        fontSize: 16,
        color: "#03a918",
      }}
    />
  );

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearchSelect(val) {
    console.log("search:", val);
  }

  const marks = {
    500: "500",

    3000: {
      style: {
        color: "black",
      },
      label: <strong>3000</strong>,
    },
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
                <label>Price :</label>
                <Slider
                  style={{ width: 300 }}
                  range
                  marks={marks}
                  defaultValue={[500, 3000]}
                  min={500}
                  max={3000}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="futsal-arena-details" style={{ marginTop: "20px" }}>
          <Arenamain />
        </div>
      </div>
    </>
  );
};

export default Futsalarena;
