import { Button, message, Space } from "antd";
import React, { useState } from "react";
import { PatchApi } from "../../Api/Callapi";
import { BookStatusLink } from "../../Api/Endpoint";

const ConfirmBooking = ({ bookid, bookstatus }) => {
  console.log("BookStatus:", bookstatus);
  console.log("Book Id", bookid);
  const approveBooking = async () => {
    const book_link = BookStatusLink + bookid;
    const res = await PatchApi(book_link, { status: "Approved" });
    if (res.status === 200) {
      message.success("Booking Approved");
      window.location.reload();
    } else {
      message.error("Something went wrong");
    }
  };

  const cancelBooking = async () => {
    const book_link = BookStatusLink + bookid;

    const res = await PatchApi(book_link, { status: "Cancelled" });
    if (res.status === 200) {
      message.error("Booking Cancelled");
      window.location.reload();
    } else {
      message.error("Something went wrong");
    }
  };
  return (
    <>
      {bookstatus === "Pending" ? (
        <>
          <Space size="small">
            <Button type="ghost" onClick={approveBooking}>
              Approve
            </Button>
            <Button type="ghost" onClick={cancelBooking}>
              Cancel
            </Button>
          </Space>
        </>
      ) : (
        <>
          <p>Booking has been {bookstatus}</p>
        </>
      )}
    </>
  );
};

export default ConfirmBooking;
