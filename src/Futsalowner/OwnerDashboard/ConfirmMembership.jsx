import { Button, message, Space, Tag, Modal, Form, Radio } from "antd";
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
  const [modalVisible, setModalVisible] = useState(false);

  const EditMembership = () => {
    setModalVisible(true);
  };
  const onFinish = async (values) => {
    const edit_member_link = MembersStatusLink + memberId;

    const edit_response = await PatchApi(edit_member_link, values);
    const data = edit_response.data;
    if (data.error_message) {
      message.error(data.error_message);
    } else if (edit_response.status === 200) {
      message.success("Membership Edited");
      setModalVisible(false);
      window.location.reload();
    } else {
      message.error("Failed to edit membership");
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
      ) : null}
      {memberStatus === "Cancelled" ? (
        <>
          <p>
            Membership has been <Tag color="red">Cancelled</Tag>{" "}
          </p>
        </>
      ) : null}
      {memberStatus === "Approved" ? (
        <>
          <p>
            Your Membership has been <Tag color="green">Approved</Tag>{" "}
          </p>
          <Space size="small">
            <Button type="ghost" onClick={EditMembership}>
              Edit
            </Button>
          </Space>
        </>
      ) : null}
      <Modal
        centered
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        closable={false}
        footer={null}
      >
        <Form name="become-member" onFinish={onFinish} scrollToFirstError>
          <Form.Item name="member_type" label="Member Type">
            <Radio.Group>
              <Radio value="Gold">Gold</Radio>
              <Radio value="Platinum">Platinum</Radio>
              <Radio value="Diamond">Diamond</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ConfirmMembership;
