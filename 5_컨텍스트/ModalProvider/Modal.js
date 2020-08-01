import React from "react";
import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <ModalWrapper>
      <div className="wrapper">
        <div className="container">{children}</div>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  zindex: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);

  & .wrapper {
    vertical-align: middle;
  }

  & .container {
    width: 400px;
    margin: 40px auto 0px;
    padding: 20px;
    background: #fff;
  }
`;
