import React from "react";
import Action from "./Action";
import { useDispatch } from "react-redux";
import { setAge } from "./actions/collectionActions";

const Dispatch = ({ id }) => {
  const dispatch = useDispatch();
  const handleSetAge = (id, age) => {
    dispatch(setAge(id, age));
  };

  return <Action setAge={handleSetAge} />;
};

export default Dispatch;
