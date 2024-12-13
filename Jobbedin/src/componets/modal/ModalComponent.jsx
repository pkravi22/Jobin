
import React, { useState } from "react";
import { Button, Modal } from "antd";
const ModalComponent = ({
  modalOpen,
  setModalOpen,
  status,
  setStatus,
  sendStatus,
}) => {
  const handlechange = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
    
  };
  
  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button  onClick={()=>sendStatus()} key="submit" type="primary" disabled={status.length?false:true}>Post</Button>
        ]}
      >
        <input
          placeholder="What do you want to write?"
          className="w-full h-auto px-2 py-4"
          onChange={handlechange}
          value={status}
        ></input>
      </Modal>
    </>
  );
};
export default ModalComponent;
