import React, { useCallback } from "react";
import Text from "../common/Text";
import Spacing from "../common/Spacing";
import Input from "../common/Input";
import Button from "../common/Button";
import InlineList from "../common/InlineList";
import Form, { FormContext } from "../common/Form";
import ModalContext from "../common/Modal/context";
import useTransaction from "../../hooks/useTransaction";

const TradeCoinPage = ({ name, code, price, type, loading }) => {
  const typeName = type === "sell" ? "판매" : "구매";
  const { createTransaction } = useTransaction();

  const handleSubmit = useCallback(
    (values, closeModal) => {
      const formValues = {
        ...values,
        code,
        name,
      };

      createTransaction(formValues, closeModal);
    },
    [name, code]
  );

  return (
    <ModalContext.Consumer>
      {({ closeModal }) => (
        <Form
          onSubmit={(values) => handleSubmit(values, closeModal)}
          initValues={{ currentPrice: price }}
        >
          <FormContext.Consumer>
            {({ onChange, values }) => (
              <Spacing horizontal={4} vertical={8}>
                <Text xlarge bold>
                  {name} {typeName}
                </Text>
                <Spacing bottom={2}>
                  <Input
                    name="currentPrice"
                    label="금액"
                    value={values["currentPrice"]}
                    onChange={onChange}
                  />
                </Spacing>
                <Spacing bottom={2}>
                  <Input
                    name="amount"
                    label="수량"
                    value={values["amount"]}
                    onChange={onChange}
                  />
                </Spacing>
                <InlineList spacingBetween={1}>
                  <Button primary disabled={loading}>
                    {loading ? "거래 처리중" : typeName}
                  </Button>
                  <Button onPress={closeModal} disabled={loading}>
                    취소
                  </Button>
                </InlineList>
              </Spacing>
            )}
          </FormContext.Consumer>
        </Form>
      )}
    </ModalContext.Consumer>
  );
};

export default TradeCoinPage;
