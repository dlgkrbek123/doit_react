import React from "react";

const Presentation = ({ userName, entity }) => {
  return (
    <div>
      이름: {userName}
      선택된 항목: {entity && `name: ${entity.name}, age: ${entity.age}`}
    </div>
  );
};

export default Presentation;
