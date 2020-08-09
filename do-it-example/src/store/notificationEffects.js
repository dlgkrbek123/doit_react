import { SET_ERROR } from "../actions/transaction";
import {
  SHOW_NOTIFICATION,
  showMessage,
  hideMessage,
} from "../actions/notification";
import debounce from "lodash/debounce";

const hide = debounce((store) => store.dispatch(hideMessage()), 4000);

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;

  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(errorMessage, true));
  } else if (type === SHOW_NOTIFICATION) {
    hide(store);
  }

  return nextRunner(action);
};
