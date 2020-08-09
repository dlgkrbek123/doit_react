import React, { useContext } from "react";
import styled from "styled-components";
import Heading from "./common/Heading";
import Button from "./common/Button";
import ModalContext from "./common/Modal/context";

import { REGISTER_USER_MODAL } from "../constants/modals";
export const HEIGHT = 64;

const AppNav = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <StyledAppNav>
      <div className="container">
        <Heading level={3} inverse>
          두잇 코인 거래소
        </Heading>
        <Button
          inverse
          bold
          large
          onClick={() => openModal(REGISTER_USER_MODAL)}
        >
          회원 가입
        </Button>
      </div>
    </StyledAppNav>
  );
};

const StyledAppNav = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEIGHT - 4}px;
  background-color: ${({ theme }) => theme.color.primary};

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${({ theme }) => theme.unit * 2}px;
    padding-right: ${({ theme }) => theme.unit * 2}px;
  }
`;

export default AppNav;
