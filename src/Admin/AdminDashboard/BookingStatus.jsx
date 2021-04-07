import React from "react";
import { Table, Button, Space } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Contact No",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time Slot",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Futsal Name",
    dataIndex: "futname",
    key: "futname",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="small">
        <Button type="ghost">Cancel</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Anil Brown",
    phone: 985765567,
    date: "04/02/2022",
    time: "12:04 AM",
    type: "5A",
    futname: "Beni Futsal",
  },
  {
    key: "2",
    name: "John Brown",
    phone: 985765567,
    date: "04/02/2022",
    time: "12:04 AM",
    type: "5A",
    futname: "Beni Futsal",
  },
  {
    key: "3",
    name: "David Brown",
    phone: 985765567,
    date: "04/02/2022",
    time: "12:04 AM",
    type: "5A",
    futname: "Beni Futsal",
  },
];

const BookingStatus = () => {
  return (
    <>
      <div className="admin-booking-status">
        <h1>Booking Status</h1>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default BookingStatus;
