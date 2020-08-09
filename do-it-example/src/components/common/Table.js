import React from "react";
import styled from "styled-components";

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export default Table;
