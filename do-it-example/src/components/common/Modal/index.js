import React from "react";
import styled from "styled-components";
import Card from "../Card";

const Modal = ({ children }) => {
  return (
    <ModalOverlay>
      <div className="wrapper">
        <div className="container">
          <Card vertical={2} horizontal={2}>
            {children}
          </Card>
        </div>
      </div>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  & > .wrapper {
    vertical-align: middle;
  }

  & > .wrapper > .container {
    width: 700px;
    margin: 40px auto 0px;
  }
`;

export default Modal;
