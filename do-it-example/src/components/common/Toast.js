import React from "react";
import styled from "styled-components";
import Spacing from "./Spacing";
import Text from "./Text";

const Toast = ({ message, warning }) => {
  return (
    <Overlay>
      <div className={`message-wrapper ${warning ? "warning" : ""}`}>
        <Spacing>
          <Text inverse bold>
            {message}
          </Text>
        </Spacing>
      </div>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: ${({ theme }) => theme.unit * 4}px;

  & .message-wrapper {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
    border-radius: ${({ theme }) => theme.unit}px;
    background: ${({ theme }) => theme.color.secondary};
    padding-top: ${({ theme }) => theme.unit * 2}px;
    padding-bottom: ${({ theme }) => theme.unit * 2}px;
    padding-right: ${({ theme }) => theme.unit * 4}px;
    padding-left: ${({ theme }) => theme.unit * 4}px;
    margin-bottom: ${({ theme }) => theme.unit * 4}px;
  }

  & .message-wrapper.warning {
    background: ${({ theme }) => theme.color.error};
  }
`;

export default Toast;
