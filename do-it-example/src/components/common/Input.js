import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const Input = ({
  errorMessage,
  label,
  value,
  name,
  onChange,
  type,
  styles,
  large,
  xlarge,
  small,
  xsmall,
  autoFocus,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, []);

  const handleChange = useCallback(
    (e) => {
      if (onChange) {
        onChange(name, e.target.value);
      }
    },
    [name, onChange]
  );

  return (
    <StyledFieldSet>
      <label
        htmlFor={`input_${name}`}
        className={`label ${errorMessage ? "error-label" : ""}`}
      >
        {errorMessage || label}
      </label>
      <input
        className={`
          input 
          ${errorMessage ? "error" : ""} 
          ${xsmall ? "xsmall" : ""} 
          ${small ? "small" : ""} 
          ${large ? "large" : ""}
          ${xlarge ? "xlarge" : ""}
        `}
        id={`input_${name}`}
        ref={ref}
        type={type}
        onChange={handleChange}
        value={value}
      />
    </StyledFieldSet>
  );
};

const StyledFieldSet = styled.fieldset`
  position: relative;
  padding: 0;
  border: 0;

  & > .label {
    display: block;
    font-size: ${({ theme }) => theme.size.xs}px;
    top: 2px;
    left: ${({ theme }) => theme.unit * 2}px;
    cursor: pointer;
  }

  & > .label.error-label {
    color: ${({ theme }) => theme.color.error};
  }

  & > .input {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.size.md};
    line-height: ${({ theme }) => theme.lineHeight.md};
    padding: ${({ theme }) => theme.unit * 1.5}px;
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 4px;
    outline: 0;
  }

  & > .input:focus {
    box-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.3);
  }

  & .xlarge {
    font-size: ${({ theme }) => theme.size.xg}px;
  }

  & .large {
    font-size: ${({ theme }) => theme.size.lg}px;
  }
  & .small {
    font-size: ${({ theme }) => theme.size.sm}px;
    padding: ${({ theme }) => theme.unit}px;
  }

  & .error {
    border-color: color.error;
  }
`;

export default Input;
