import React, { useState, useCallback, useRef, useMemo } from "react";
import Modal from "./Modal";
import DeleteModalContent from "./DeleteModalContent";

export const ModalContext = createContext({});

const createModalProvider = (ContentMap = {}) => {
  return ({ children }) => {
    const [state, setState] = useState({
      showModal: false,
    });
    const contentIdRef = useRef("");
    const modalPropsRef = useRef({});
    const ModalContent = useMemo(() => {
      return ContentMap[contentIdRef.current];
    }, [contentIdRef.current]);

    const handleOpen = useCallback((contentId, modalProps) => {
      contentIdRef.current = contentId;
      modalPropsRef.current = modalProps;
      setState({
        showModal: true,
      });
    }, []);
    const handleClose = useCallback(() => {
      setState({
        showModal: false,
      });
    }, []);

    return (
      <ModalContext.Provider
        value={{
          openModal: handleOpen,
          closeModal: handleClose,
        }}
      >
        {children}
        {state.showModal && ModalContent && (
          <Modal>
            <ModalContent {...modalPropsRef.current} />
          </Modal>
        )}
      </ModalContext.Provider>
    );
  };
};

export const CONFIRM_DELETE_MODAL = "confirm_delete";
const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
};

export default createModalProvider(CONTENT_MAP);
