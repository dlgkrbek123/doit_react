import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  disabled,
  styles,
  large,
  xlarge,
  small,
  xsmall,
  primary,
  secondary,
  type,
  onPress,
}) => {
  return (
    <StyledButton
      className={`
      ${xsmall ? "xsmall" : ""}
      ${small ? "small" : ""}
      ${large ? "large" : ""}
      ${xlarge ? "xlarge" : ""}
      ${primary ? "primary" : ""}
      ${secondary ? "secondary" : ""}
      ${disabled ? "disabled" : ""}
    `}
      disabled={disabled}
      onClick={onPress}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid #333333;
  border-radius: ${({ theme }) => theme.unit}px;
  color: ${({ theme }) => theme.color.default};
  font-size: ${({ theme }) => theme.size.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: ${({ theme }) => theme.unit * 2}px;
  padding-left: ${({ theme }) => theme.unit * 4}px;
  padding-right: ${({ theme }) => theme.unit * 4}px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.grayLight};
  }

  &:focus {
    box-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.3);
  }

  &.xlarge {
    font-size: ${({ theme }) => theme.size.xg}px;
    padding: ${({ theme }) => theme.unit * 2.5}px;
  }

  &.large {
    font-size: ${({ theme }) => theme.size.lg}px;
    padding: ${({ theme }) => theme.unit * 2.5}px;
  }

  &.small {
    font-size: ${({ theme }) => theme.size.sm}px;
    padding: ${({ theme }) => theme.unit * 1.5}px;
  }

  &.xsmall {
    font-size: ${({ theme }) => theme.size.xs}px;
    padding: ${({ theme }) => theme.unit}px;
  }

  &.primary {
    border-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
  }

  &.primary:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }

  &.secondary {
    border-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.secondary};
  }

  &.disabled {
    border-color: ${({ theme }) => theme.color.grayDark};
    color: ${({ theme }) => theme.color.grayLight};
    cursor: default;
    opacity: 0.5;
    background-color: color.gray;
  }

  &.disabled:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export default Button;
