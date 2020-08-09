import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import Option from "./Option";
export { Option };

const Select = ({
  children,
  disabled,
  errorMessage,
  label,
  value,
  name,
  styles,
  large,
  xlarge,
  small,
  xsmall,
  autoFocus,
  onChange,
}) => {
  const [state, setState] = useState({
    focused: false,
  });
  const { focused } = state;

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
  const handleFocus = useCallback(() => {
    setState({ focused: true });
  }, []);
  const handleBlur = useCallback(() => {
    setState({ focused: false });
  }, []);

  return (
    <StyledFieldSet>
      <label
        htmlFor={`input_${name}`}
        className={`label ${errorMessage ? "error-label" : ""}`}
      >
        {errorMessage || label}
      </label>
      <div
        className={`
          placeholder
          ${xsmall ? "xsmall-padding" : ""}
          ${small ? "small-padding" : ""}
          ${large ? "large-padding" : ""}
          ${xlarge ? "xlarge-padding" : ""}
          ${focused ? "focus" : ""}
          ${errorMessage ? "error" : ""}
        `}
      >
        <select
          className={`
            select
            ${xsmall ? "xsmall" : ""}
            ${small ? "small" : ""}
            ${large ? "large" : ""}
            ${xlarge ? "xlarge" : ""}
          `}
          disabled={disabled}
          id={`input_${name}`}
          ref={ref}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { disabled })
          )}
        </select>
      </div>
    </StyledFieldSet>
  );
};

const StyledFieldSet = styled.fieldset`
  position: relative;
  padding: 0;
  border: 0;

  & > .label {
    display: block;
    fontsize: ${({ theme }) => theme.size.xs}px;
    top: 2px;
    left: ${({ theme }) => theme.unit * 2}px;
    cursor: pointer;
  }

  & > .label.error-label {
    color: ${({ theme }) => theme.color.error};
  }

  & .placeholder {
    margin-top: 2px;
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 4px;
    padding: ${({ theme }) => theme.unit * 1.5}px;
  }

  & .focus {
    box-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.3);
  }

  & .xlarge-padding {
    padding: ${({ theme }) => theme.unit * 2}px;
  }

  & .large-padding {
    padding: ${({ theme }) => theme.unit * 2}px;
  }

  & .small-padding {
    padding: ${({ theme }) => theme.unit - 1}px;
  }

  & .select {
    font-size: ${({ theme }) => theme.size.md}px;
    line-height: ${({ theme }) => theme.lineHeight.md};
    background-color: ${({ theme }) => theme.color.white};
    border: 0;
    outline: 0;
    width: 100%;
  }

  & .xlarge {
    font-size: ${({ theme }) => theme.size.xg}px;
  }

  & .large {
    font-size: ${({ theme }) => theme.size.lg}px;
  }

  & .small {
    font-size: ${({ theme }) => theme.size.sm}px;
  }

  & .error {
    border-color: ${({ theme }) => theme.color.error};
  }
`;

export default Select;
