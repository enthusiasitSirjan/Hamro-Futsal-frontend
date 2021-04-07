import { Button, message, Space } from "antd";
import React from "react";
import { DeleteApi } from "../../Api/Callapi";
import { UserAccountDelete } from "../../Api/Endpoint";

const DeleteUser = (userId) => {
  console.log("User Id :", userId.userId);
  const yesDelete = async () => {
    const delete_link = UserAccountDelete + userId.userId;
    const res = await DeleteApi(delete_link);
    if (res.status === 204) {
      message.error("User Deleted");
      window.location.reload();
    } else {
      message.error("Something went wrong");
    }
  };

  const NoDelete = async () => {
    window.location.reload();
  };
  return (
    <>
      <p>Do you want to Delete this User?</p>
      <Space size="small">
        <Button type="danger" onClick={yesDelete}>
          Yes
        </Button>
        <Button type="ghost" onClick={NoDelete}>
          No
        </Button>
      </Space>
    </>
  );
};

export default DeleteUser;
