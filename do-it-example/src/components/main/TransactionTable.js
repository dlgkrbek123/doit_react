import React from "react";
import Table from "../common/Table";
import TableRow from "../common/TableRow";
import TableCell from "../common/TableCell";
import TableHead from "../common/TableHead";
import TableBody from "../common/TableBody";
import Text from "../common/Text";
import Spacing from "../common/Spacing";
import withLoading from "../common/withLoading";

const LoadingMessage = (
  <Spacing vertical={4} horizontal={2}>
    <Text large>데이터를 불러들이고 있습니다.</Text>
  </Spacing>
);

const TransactionTable = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">코인</TableCell>
          <TableCell align="center">시가 총액</TableCell>
          <TableCell align="center">현재 시세</TableCell>
          <TableCell align="right">거래 시간</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map(
          ({ id, name, totalPrice, currentPrice, datetime }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell align="center">{totalPrice}</TableCell>
              <TableCell align="center">{currentPrice}</TableCell>
              <TableCell align="right">{datetime}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default withLoading(LoadingMessage)(TransactionTable);
