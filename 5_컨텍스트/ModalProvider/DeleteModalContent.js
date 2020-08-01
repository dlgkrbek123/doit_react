import React, { useContext } from "react";
import { ModalContext } from "./createModalProvider";

export default ({ id, name }) => {
  const { openModal, closeModal } = useContext(ModalContext);

  return (
    <div>
      <div>
        <p>정말로 삭제하시겠습니까?</p>
      </div>
      <button>예</button>
      <button onClick={closeModal}>닫기</button>
    </div>
  );
};
