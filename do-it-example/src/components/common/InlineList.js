import React from "react";
import styled from "styled-components";

const InlineList = ({ children, spacingBetween = 1, align, verticalAlign }) => {
  return (
    <Wrapper
      className={`${align === "center" ? "align-center" : ""} ${
        align === "right" ? "align-right" : ""
      } ${verticalAlign === "top" ? "vertical-align-top" : ""} ${
        verticalAlign === "bottom" ? "vertical-align-bottom" : ""
      }`}
      spacingBetween={spacingBetween}
    >
      {React.Children.map(children, (child) => (
        <div className="child-wrapper">{child}</div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flexwrap: wrap;
  justify-content: flex-start;
  align-items: center;

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &.vertical-align-top {
    align-items: flex-start;
  }

  &.vertical-align-bottom {
    align-items: flex-end;
  }

  & > .child-wrapper {
    margin-right: ${(props) => props.spacingBetween * props.theme.unit}px;
  }
`;

export default InlineList;
