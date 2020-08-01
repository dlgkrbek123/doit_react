import React, { useContext } from "react";
import { FormContext } from "./FormProvider";

const SubmitButton = ({ children }) => {
  const { submit } = useContext(FormContext);

  return <button onClick={submit}>{children}</button>;
};
