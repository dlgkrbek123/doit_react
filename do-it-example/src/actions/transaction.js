import Api from "../Api";

export const LOADING_TRANSACTION_LIST = "LOADING_TRANSACTION_LIST";
export const SET_TRANSACTION_LIST = "SET_TRANSACTION_LIST";
export const SET_ERROR = "SET_ERROR";

export const TRADE_COMPLETE = "TRADE_COMPLETE";

export const loading = () => {
  return {
    type: LOADING_TRANSACTION_LIST,
  };
};

export const setError = (errorMessage) => {
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  };
};

export const setTransactionList = (transactions) => ({
  type: SET_TRANSACTION_LIST,
  payload: transactions,
});

export const requestTransactionList = (params) => {
  return async (dispatch, getState) => {
    try {
      dispatch(loading());
      const response = await Api.get("/transactions", { params });
      dispatch(setTransactionList(response.data));
    } catch (error) {
      console.error(error);
      dispatch(setError(error?.response?.data?.errorMessage || ""));
    }
  };
};

export const createTransaction = (data, onComplete) => {
  return async (dispatch, getState) => {
    try {
      const response = await Api.post("/transactions", data);
      dispatch(transactionComplete());
      onComplete();
    } catch (error) {
      dispatch(setError(error?.response?.data?.errorMessage || ""));
    }
  };
};

export const transactionComplete = () => {
  return {
    type: TRADE_COMPLETE,
  };
};
