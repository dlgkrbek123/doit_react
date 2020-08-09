import React from "react";
import Heading from "../common/Heading";
import InlineList from "../common/InlineList";
import CoinDashlet from "./CoinDashlet";

const CoinOverview = () => {
  return (
    <>
      <Heading level={3}>코인 동향</Heading>
      <InlineList>
        <CoinDashlet name="비트코인" priceLabel="4,216,000원" />
        <CoinDashlet name="이더리움" priceLabel="216,000원" />
        <CoinDashlet name="두잇코인" priceLabel="25,000원" />
      </InlineList>
    </>
  );
};

export default CoinOverview;
