import React from "react";
import styled from "styled-components";

const Text = ({
  children,
  bold,
  light,
  large,
  xlarge,
  small,
  xsmall,
  primary,
  secondary,
  inverse,
}) => {
  // props에 prop 이름만 넣으면 true가 넘어간다.

  return (
    <StyledSpan
      className={`
        ${xsmall ? "xsmall" : ""} 
        ${small ? "small" : ""} 
        ${large ? "large" : ""} 
        ${xlarge ? "xlarge" : ""} 
        ${secondary ? "secondary" : ""}
        ${primary ? "primary" : ""} 
        ${bold ? "bold" : ""} 
        ${light ? "light" : ""} 
        ${inverse ? "inverse" : ""}
      `}
    >
      {children}
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.color.default};
  font-size: ${({ theme }) => theme.size.md}px;
  line-height: ${({ theme }) => theme.lineHeight.md};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  &.xlarge {
    font-size: ${({ theme }) => theme.size.xg}px;
    line-height: ${({ theme }) => theme.lineHeight.xg}px;
  }
  &.large {
    font-size: ${({ theme }) => theme.size.lg}px;
    line-height: ${({ theme }) => theme.lineHeight.lg}px;
  }
  &.small {
    font-size: ${({ theme }) => theme.size.sm}px;
    line-height: ${({ theme }) => theme.lineHeight.sm}px;
  }
  &.xsmall {
    font-size: ${({ theme }) => theme.size.xs}px;
    line-height: ${({ theme }) => theme.lineHeight.xs}px;
  }

  &.primary {
    color: ${({ theme }) => theme.color.primary};
  }
  &.secondary {
    color: ${({ theme }) => theme.color.secondary};
  }
  &.inverse {
    color: ${({ theme }) => theme.color.white};
  }

  &.light {
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
  &.bold {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export default Text;
