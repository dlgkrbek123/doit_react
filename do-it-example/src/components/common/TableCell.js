import React from "react";
import styled from "styled-components";

const TableCell = ({ children, align, baseline, isHeader }) => {
  const Tag = isHeader ? "th" : "td";
  const StyledTag = styled[Tag]`
    padding-top: ${({ theme }) => theme.unit * 4}px;
    padding-bottom: ${({ theme }) => theme.unit * 4}px;
    padding-right: ${({ theme }) => theme.unit * 8}px;
    padding-left: ${({ theme }) => theme.unit * 8}px;
    background: ${({ theme }) => theme.color.white};
    text-align: left;

    &.header {
      background: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
    }

    &.baseline {
      border-bottom: 1px solid ${({ theme }) => theme.color.border};
    }

    &.align-center {
      text-align: center;
    }

    &.align-right {
      text-align: right;
    }
  `;

  return (
    <StyledTag
      className={`
        ${isHeader ? "header" : baseline ? "baseline" : ""} 
        ${align === "center" ? "align-center" : ""} 
        ${align === "right" ? "align-right" : ""}
      `}
    >
      {children}
    </StyledTag>
  );
};

export default TableCell;
