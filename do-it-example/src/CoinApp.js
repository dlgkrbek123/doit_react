import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import AppLayout from "./components/AppLayout";
import theme from "./Theme";
import MainPage from "./components/main/MainPage";

const CoinApp = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <AppLayout>
          <MainPage />
        </AppLayout>
      </ThemeProvider>
    </>
  );
};

const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eeeeee;
  }
`;

export default CoinApp;
