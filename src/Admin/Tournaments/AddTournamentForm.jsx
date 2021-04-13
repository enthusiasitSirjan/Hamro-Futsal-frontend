import { Button, Card, Col, Form, Input, message, Row } from "antd";
import React, { useState } from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";
import { PostApi } from "../../Api/Callapi";
import { AddTournamentLinks } from "../../Api/Endpoint";

const AddTournamentForm = () => {
  const [userInfo, setUserInfo] = useState({});

  const [img, setImg] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  const handleChangeImage = (e) => {
    var fileObject = e.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(fileObject);
    fileReader.onload = function () {
      var result = fileReader.result;
      console.log(result);
      setImg(fileObject);
      setUserInfo({ ...userInfo, photo: fileObject });
    };
  };
  const onFinish = async (values) => {
    console.log("Success:", values);

    var profileData = new FormData();

    for (var key in values) {
      profileData.append(key, values[key]);
    }
    console.log(img);
    if (img !== undefined) {
      profileData.append("tourno_photo", img);
    }
    const response = await PostApi(AddTournamentLinks, profileData);

    if (response.status === 201) {
      message.success("Tournament Added");
    } else {
      message.error("Failed to add training");
    }
  };
  return (
    <>
      <div className="admin-dashboard-container">
        <Row gutter={25}>
          <Col>
            <AdminSidebar />
          </Col>
          <Col style={{ width: "50%" }}>
            <div className="admin-training-form">
              <Card hoverable style={{ margin: "50px auto" }} width={400}>
                <div>
                  <div
                    className="first-column"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <input
                        type="file"
                        name="tourno_photo"
                        onChange={handleChangeImage}
                        style={{ marginTop: "10px" }}
                      />
                    </div>
                  </div>
                  <br />

                  <br />

                  <div>
                    <Form onFinish={onFinish}>
                      <Form.Item
                        name="tourno_name"
                        label="Tournament Name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your training name!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item>
                        <Form.Item
                          name="tourno_date"
                          label="Tournament Date"
                          rules={[
                            {
                              required: true,
                              message: "Please input your tournament date!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Form.Item>
                      <Form.Item
                        name="tourno_location"
                        label="Location"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Location!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddTournamentForm;
