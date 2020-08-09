import React, { useContext } from "react";
import Heading from "../common/Heading";
import Button from "../common/Button";
import Card from "../common/Card";
import InlineList from "../common/InlineList";
import Text from "../common/Text";

import ModalContext from "../common/Modal/context";
import { TRADE_COIN_MODAL } from "../../constants/modals";

const CoinDashlet = ({ name, priceLabel }) => {
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <Card vertical={4} horizontal={4}>
        <Heading level={4}>
          {name}
          <Text>{priceLabel}</Text>
        </Heading>
        <InlineList spacingBetween={1}>
          <Button
            primary
            small
            onPress={() =>
              openModal(TRADE_COIN_MODAL, {
                type: "buy",
                name,
                price: priceLabel,
              })
            }
          >
            매도
          </Button>
          <Button
            small
            onPress={() =>
              openModal(TRADE_COIN_MODAL, {
                type: "sell",
                name,
                price: priceLabel,
              })
            }
          >
            매수
          </Button>
        </InlineList>
      </Card>
    </>
  );
};

export default CoinDashlet;
