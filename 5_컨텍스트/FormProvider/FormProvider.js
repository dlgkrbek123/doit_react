import React, { createContext, useState, useCallback } from "react";

export const FormContext = createContext({});

const FormProvider = ({ children, onSubmit, validate }) => {
  const [state, setState] = useState({
    values: {},
    errors: {},
  });

  const onChange = useCallback(
    (name, updatedValue) => {
      const nextValues = {
        ...state.values,
        [name]: updatedValue,
      };

      setState({
        ...state,
        values: nextValues,
        ...onValidate(nextValues),
      });
    },
    [state]
  );
  const reset = useCallback(() => {
    setState({
      values: {},
      errors: {},
    });
  }, []);
  const submit = useCallback(() => {
    onSubmit(state.values);
  }, [state]);
  const onValidate = useCallback((values) => {
    if (validate) {
      const errors = validate(values);
      return {
        errors,
      };
    } else {
      return {};
    }
  }, []);

  <FormContext.Provider
    value={{
      values: state.values,
      erros: state.errors,
      onChange,
      reset,
      submit,
    }}
  >
    {children}
  </FormContext.Provider>;
};
