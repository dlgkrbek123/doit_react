import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTransactionList } from "../actions/transaction";

const useTransaction = () => {
  const { ids, entities } = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  const transactions = ids.map((id) => entities[id]);
  const dispatchSetTransactionList = useCallback((...args) => {
    dispatch(setTransactionList(...args));
  }, []);

  return {
    transactions,
    setTransactionList: dispatchSetTransactionList,
  };
};

export default useTransaction;
