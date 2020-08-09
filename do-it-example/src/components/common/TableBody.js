import React from "react";

const TableBody = ({ children }) => {
  const { length } = React.Children.toArray(children);

  return (
    <tbody>
      {React.Children.map(children, (child, index) => {
        const baseline = index < length - 1 ? true : false;
        return React.cloneElement(child, { baseline });
      })}
    </tbody>
  );
};

export default TableBody;
