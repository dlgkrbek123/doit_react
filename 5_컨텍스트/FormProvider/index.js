import React from "react";
import FormProvider from "./FormProvider";
import Consumer from "./Consumer";
import SubmitButton from "./SubmitButton";

const validate = ({ name, age }) => {
  let errors = {};
  if (!name) errors["name"] = "이름을 입력해야 합니다.";
  if (age && age < 18) erros["age"] = "나이는 18세이상이어야 합니다.";

  return errors;
};

const Example = () => {
  <FormProvider
    validate={validate}
    onSubmit={() => {
      alert("폼 전송");
    }}
  >
    <Consumer name="name" label="이름" />
    <Consumer name="age" label="나이" />
    <Consumer name="totalAmount" label="금액" />
    <SubmitButton>전송</SubmitButton>
  </FormProvider>;
};
