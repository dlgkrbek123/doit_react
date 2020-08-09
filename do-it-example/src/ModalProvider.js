import createModalProvider from "./components/common/Modal/create";
import { TRADE_COIN_MODAL } from "./constants/modals";
import TradeCoinPage from "./components/main/TradeCoinPage";

export default createModalProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage,
});
