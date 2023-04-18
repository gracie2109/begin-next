import React, { useState, Fragment } from 'react';
import { Button, Modal } from 'antd';

type Props = {
  title?: string,
  isShowing?: boolean,
  hide?: any,
  modalChild?: any

}
export const ModalComp = ({ isShowing, hide, title, modalChild }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div onClick={hide}>
      <Modal title={title ?? ""}
        open={isShowing}
        onCancel={hide}
        footer={null}
      >
        {title}
      </Modal>

    </div>
  );
};
