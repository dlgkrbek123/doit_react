import React, { useCallback } from "react";
import InlineList from "../common/InlineList";
import Button from "../common/Button";
import Text from "../common/Text";
import Input from "../common/Input";
import Form, { FormContext } from "../common/Form";
import Select, { Option } from "../common/Select";
import useTransaction from "../../hooks/useTransaction";

const TransactionSearchFilter = ({ initValues }) => {
  const { requestTransactionList } = useTransaction();

  const handleSubmit = useCallback((values) => {
    const cleanedParams = Object.entries(values)
      .filter(([key, value]) => value !== "")
      .reduce((obj, [key, value]) => {
        return {
          ...obj,
          [key]: value,
        };
      }, {});

    requestTransactionList(cleanedParams);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <FormContext.Consumer>
        {({ onChange, values }) => {
          return (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select
                name="code"
                label="코인 코드"
                onChange={onChange}
                value={values["code"]}
              >
                <Option label="선택해주세요" value="" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="두잇코인(DOIT)" value="DOIT" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소 거래가"
                onChange={onChange}
                value={values["currentPrice_gte"]}
              />
              <Input
                name="currentPrice_lte"
                label="최대 거래가"
                onChange={onChange}
                value={values["currentPrice_lte"]}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          );
        }}
      </FormContext.Consumer>
    </Form>
  );
};

export default TransactionSearchFilter;
