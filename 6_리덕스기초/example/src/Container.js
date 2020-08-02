import React from "react";
import Presentation from "./Presentation";
import { useSelector } from "react-redux";

const Container = ({ id }) => {
  const { user, collection } = useSelector((state) => state);
  const userName = user.name;
  const entity = collection.entities[id];

  return <Presentation userName={userName} entity={entity} />;
};

export default Container;
