import React, { useContext } from "react";
import { FormContext } from "./FormProvider";

const FormConsumer = ({ name, ...otherProps }) => {
  const { values, erros, onChange } = useContext(FormContext);

  return (
    <input
      {...otherProps}
      name={name}
      onChange={onChange}
      value={values[name]}
      errorMessage={errors[name]}
    />
  );
};

export default FormConsumer;
