import React, { useEffect, useRef } from "react";
import "./style.css";

const Modal = ({ title, children, onConfirm, onCancel, width, visible, footer }) => {
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
    <div className="modal">
      <div className="modal__mask" />
      <div className="modal__wrapper" tabIndex="-1" role="dialog" visible={visible} >
        <div className="modal__body" role="document" width={width} >
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