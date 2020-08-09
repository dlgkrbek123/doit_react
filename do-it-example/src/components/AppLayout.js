import React from "react";
import styled from "styled-components";
import AppNav, { HEIGHT } from "./AppNav";

const AppLayout = ({ children }) => {
  return (
    <StyledAppLayout>
      <AppNav />
      <div className="app-body">{children}</div>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  margin-top: ${HEIGHT}px;

  & .app-body {
    padding: ${({ theme }) => theme.unit * 4}px;
  }
`;

export default AppLayout;
