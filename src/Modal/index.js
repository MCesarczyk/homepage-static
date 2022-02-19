import React, { useEffect, useRef } from "react";
import ModalCloseButton from "./CloseButton";
import List from "./List";
import "./style.css";

const Modal = ({ visible, onCancel, content }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (visible && ref.current && !ref.current.contains(e.target)) {
        onCancel();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [visible]);

  return (
    <div data-testid="modal-root" className={`modal ${!visible ? 'hidden' : ''}`}>
      <div className="modal__mask" />
      <div className="modal__wrapper" tabIndex="-1" role="dialog">
        <div data-testid="modal" ref={ref} className="modal__body" role="document">
          <ModalCloseButton onClick={onCancel} />

          <h3 className="modal__header">
            {content?.title}
          </h3>
          {content?.items && <List
            items={content?.items}
          />}
        </div>
      </div>
    </div>
  )
};

export default Modal;