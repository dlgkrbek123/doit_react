import React from "react";
import styled from "styled-components";
import Spacing from "./Spacing";

const Card = ({ children, ...spacingProps }) => {
  return (
    <CardWrapper>
      <Spacing {...spacingProps}> {children}</Spacing>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border-radius: ${({ theme }) => theme.unit}px;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.unit * 4}px;
`;

export default Card;
