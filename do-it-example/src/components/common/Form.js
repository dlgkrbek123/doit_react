import React, { useState, useCallback } from "react";
export const FormContext = React.createContext({});

const FormProvider = ({ children, initValues = {}, validate, onSubmit }) => {
  const [state, setState] = useState({
    values: initValues,
    errors: {},
  });
  const { values, errors } = state;

  const reset = useCallback(() => {
    setState({ values: {} });
  }, []);

  const handleValidate = useCallback(
    (values) => {
      if (!validate) {
        return {};
      }

      return validate(values);
    },
    [validate]
  );

  const onChange = useCallback((name, updatedValue) => {
    setState(({ values, errros }) => {
      const nextValues = {
        ...values,
        [name]: updatedValue,
      };

      return {
        values: nextValues,
        errors: handleValidate(nextValues),
      };
    });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (Object.values(errors).length === 0) {
        onSubmit(values);
      }
    },
    [values, errors, onSubmit]
  );

  return (
    <FormContext.Provider
      value={{
        errors,
        values,
        onChange: onChange,
        reset: reset,
      }}
    >
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export default FormProvider;
