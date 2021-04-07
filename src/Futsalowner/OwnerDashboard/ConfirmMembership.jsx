import { Button, message, Space } from "antd";
import React, { useState } from "react";
import { PatchApi } from "../../Api/Callapi";
import { MembersStatusLink } from "../../Api/Endpoint";

const ConfirmMembership = ({ memberId, memberStatus }) => {
  const approveMembership = async () => {
    const book_link = MembersStatusLink + memberId;
    const res = await PatchApi(book_link, { pay_status: "Approved" });
    if (res.status === 200) {
      message.success("Membership Approved");
      window.location.reload();
    } else {
      message.error("Something went wrong");
    }
  };

  const cancelMembership = async () => {
    const book_link = MembersStatusLink + memberId;

    const res = await PatchApi(book_link, { pay_status: "Cancelled" });
    if (res.status === 200) {
      message.error("Membership Cancelled");
      window.location.reload();
    } else {
      message.error("Something went wrong");
    }
  };
  return (
    <>
      {memberStatus === "Pending" ? (
        <>
          <Space size="small">
            <Button type="ghost" onClick={approveMembership}>
              Approve
            </Button>
            <Button type="ghost" onClick={cancelMembership}>
              Cancel
            </Button>
          </Space>
        </>
      ) : (
        <>
          <p>Membership has been {memberStatus}</p>
        </>
      )}
    </>
  );
};

export default ConfirmMembership;
