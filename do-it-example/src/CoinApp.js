import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppLayout from "./components/AppLayout";
import theme from "./Theme";
import MainPage from "./components/main/MainPage";
import ModalProvider from "./ModalProvider";

const store = configureStore();

const CoinApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Global />
          <AppLayout>
            <MainPage />
          </AppLayout>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
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
