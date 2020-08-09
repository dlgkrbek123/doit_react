import React, { useState, useEffect } from "react";
import Api from "../../Api";
import Heading from "../common/Heading";
import Card from "../common/Card";
import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";
import useTransaction from "../../hooks/useTransaction";

const TransactionList = () => {
  const { transactions, setTransactionList } = useTransaction();
  useEffect(() => {
    Api.get("/transactions", {
      params: { code: "BTX" },
    }).then((response) => {
      setTransactionList(response.data);
    });
  }, []);

  return (
    <div>
      <Heading level={3}>거래 현황</Heading>
      <Card vertical={4} horizontal={4}>
        <TransactionSearchFilter
          initValues={{
            code: "",
            currentPrice_gte: "",
            currentPrice_lte: "",
          }}
        />
      </Card>
      <Card>
        <TransactionTable transactions={transactions} />
      </Card>
    </div>
  );
};

export default TransactionList;
