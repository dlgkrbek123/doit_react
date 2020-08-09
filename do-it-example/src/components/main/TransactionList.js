import React, { useState } from "react";
import Heading from "../common/Heading";
import Card from "../common/Card";
import TransactionTable from "./TransactionTable";
import TransactionSearchFilter from "./TransactionSearchFilter";

const TransactionList = () => {
  const [state, setState] = useState({
    transactions: [
      {
        id: "btx_01",
        name: "비트코인(BTX)",
        totalPrice: "123,123,000,000원",
        currentPrice: "4,200,000원",
        datetime: "2019/01/20 08:23:22",
      },
    ],
  });
  const { transactions } = state;

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
