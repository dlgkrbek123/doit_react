import React from "react";
import Toast from "../common/Toast";
import useNotification from "../../hooks/useNotification";

const Notification = () => {
  const { showMessage, message, warning } = useNotification();

  return showMessage && <Toast message={message} warning={warning} />;
};

export default Notification;
