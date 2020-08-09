import React from "react";

export default (loadingMessage = "로딩중") => (WrappedComponent) => {
  //   const { displayName, name: componentName } = WrappedComponent;

  return ({ isLoading, ...props }) => {
    return isLoading ? loadingMessage : <WrappedComponent {...props} />;
  };
};
