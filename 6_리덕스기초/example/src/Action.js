import React from "react";

const Action = ({ setAge }) => {
  return (
    <>
      <button
        onClick={() => {
          setAge(2, 19);
        }}
      >
        고유번호 2번 나이 19세로 변경
      </button>
    </>
  );
};

export default Action;
