import React from "react";
import styled from "styled-components";

const Heading = ({ children, inverse, level }) => {
  const HeadingTag = headingTags[level - 1];
  const StyledHead = styled[HeadingTag]`
    line-height: ${({ theme }) => theme.lineHeight.lg};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    &.inverse {
      color: ${({ theme }) => theme.color.white};
    }

    &.level1 {
      font-size: ${({ theme }) => theme.size.h1}px;
      margin-top: ${({ theme }) => theme.unit * 2}px;
      margin-bottom: ${({ theme }) => theme.unit * 4}px;
    }

    &.level2 {
      font-size: ${({ theme }) => theme.size.h2}px;
      margin-top: ${({ theme }) => theme.unit * 2}px;
      margin-bottom: ${({ theme }) => theme.unit * 4}px;
    }

    &.level3 {
      font-size: ${({ theme }) => theme.size.h3}px;
      margin-top: ${({ theme }) => theme.unit * 1.5}px;
      margin-bottom: ${({ theme }) => theme.unit * 3}px;
    }

    &.level4 {
      font-size: ${({ theme }) => theme.size.xg}px;
      margin-top: ${({ theme }) => theme.unit}px;
      margin-bottom: ${({ theme }) => theme.unit * 2}px;
    }

    &.level5 {
      font-size: ${({ theme }) => theme.size.md}px;
      margin-top: ${({ theme }) => theme.unit}px;
      margin-bottom: ${({ theme }) => theme.unit * 2}px;
    }

    &.level6 {
      font-size: ${({ theme }) => theme.size.md}px;
      margin-top: ${({ theme }) => theme.unit}px;
      margin-bottom: ${({ theme }) => theme.unit * 2}px;
    }
  `;

  return (
    <StyledHead className={`level${level} ${inverse ? "inverse" : ""}`}>
      {children}
    </StyledHead>
  );
};

const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

export default Heading;
