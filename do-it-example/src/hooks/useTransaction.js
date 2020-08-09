import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTransactionList,
  requestTransactionList,
  createTransaction,
} from "../actions/transaction";

const useTransaction = () => {
  const { ids, entities, loading, hasError, errorMessage } = useSelector(
    (state) => state.transaction
  );
  const transactions = ids.map((id) => entities[id]);

  const dispatch = useDispatch();
  const dispatchSetTransactionList = useCallback((...args) => {
    dispatch(setTransactionList(...args));
  }, []);
  const dispatchRequestTransactionList = useCallback((...args) => {
    dispatch(requestTransactionList(...args));
  }, []);
  const dispatchCreateTransaction = useCallback((...args) => {
    dispatch(createTransaction(...args));
  }, []);

  return {
    transactions,
    loading,
    hasError,
    errorMessage,
    setTransactionList: dispatchSetTransactionList,
    requestTransactionList: dispatchRequestTransactionList,
    createTransaction: dispatchCreateTransaction,
  };
};

export default useTransaction;
