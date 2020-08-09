import { useSelector } from "react-redux";

const useNotification = () => {
  const { showMessage, message, warning } = useSelector(
    (state) => state.notification
  );

  return {
    showMessage,
    message,
    warning,
  };
};

export default useNotification;
