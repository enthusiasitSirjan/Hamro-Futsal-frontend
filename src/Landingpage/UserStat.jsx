import { Card, message, Progress } from "antd";
import React, { useEffect, useState } from "react";
import { GetApi } from "../Api/Callapi";
import { AllUserCount } from "../Api/Endpoint";

const UserStat = () => {
  const [totalUser, settotalUser] = useState();

  const circleContainerStyle = {
    width: "250px",
    height: "250px",
    display: "inline-block",
  };
  useEffect(() => {
    userCount();
  }, []);
  const userCount = async (e) => {
    const response = await GetApi(AllUserCount);
    if (response.status === 200) {
      const data = response.data;
      settotalUser(data);
      // message.success("List of All Futsal Owners");
    } else {
      // message.error("Failed to load booking data right now");
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Quick Info</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Card>
          <Progress
            type="circle"
            percent={totalUser && totalUser.TotalUser}
            format={() => `${totalUser && totalUser.TotalUser}+ users`}
            strokeColor={"black"}
          />
        </Card>
        <Card>
          <Progress
            style={{ marginLeft: "10px" }}
            type="circle"
            percent={totalUser && totalUser.TotalFutsal}
            format={() => `${totalUser && totalUser.TotalFutsal}+ Futsals`}
            status="normal"
            strokeColor={"orange"}
          />
        </Card>

        <Card>
          <Progress
            style={{ marginLeft: "10px" }}
            type="circle"
            percent={10}
            format={() => "10 + Districts"}
            strokeColor={"red"}
          />
        </Card>
      </div>
    </>
  );
};

export default UserStat;
