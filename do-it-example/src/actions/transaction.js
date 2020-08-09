export const SET_TRANSACTION_LIST = "SET_TRANSACTION_LIST";

export const setTransactionList = (transactions) => ({
  type: SET_TRANSACTION_LIST,
  payload: transactions,
});
