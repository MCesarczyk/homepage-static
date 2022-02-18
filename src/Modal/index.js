import React, { useEffect, useRef } from "react";
import ModalCloseButton from "./CloseButton";
import "./style.css";

const Modal = ({ visible, onCancel }) => {
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

          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni nisi quia laudantium eveniet recusandae dolore? Reiciendis dolore rerum, porro corporis facere sapiente, odit consectetur quia quisquam aspernatur corrupti nihil.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni nisi quia laudantium eveniet recusandae dolore? Reiciendis dolore rerum, porro corporis facere sapiente, odit consectetur quia quisquam aspernatur corrupti nihil.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni nisi quia laudantium eveniet recusandae dolore? Reiciendis dolore rerum, porro corporis facere sapiente, odit consectetur quia quisquam aspernatur corrupti nihil.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Modal;