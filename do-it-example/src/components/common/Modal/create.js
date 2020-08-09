import React, { useState, useRef, useCallback } from "react";
import Modal from "../Modal";
import context from "./context";

const createModalProvider = (ContentMap = {}) => {
  return ({ children }) => {
    const contentIdRef = useRef("");
    const modalPropsRef = useRef({});
    const [state, setState] = useState({ showModal: false });
    const { showModal } = state;
    const ModalContent = ContentMap[contentIdRef.current];

    const handleOpen = useCallback((contentId, modalProps) => {
      contentIdRef.current = contentId;
      modalPropsRef.current = modalProps;
      setState({
        showModal: true,
      });
    }, []);
    const handleClose = useCallback(() => {
      this.setState({ showModal: false });
    }, []);

    return (
      <context.Provider
        value={{
          openModal: handleOpen,
          closeModal: handleClose,
        }}
      >
        {children}
        {showModal && ModalContent && (
          <Modal>
            <ModalContent {...modalPropsRef.current} />
          </Modal>
        )}
      </context.Provider>
    );
  };
};

export default createModalProvider;
