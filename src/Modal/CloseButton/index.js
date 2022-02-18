import React from "react";
import { CloseIcon } from "./icon";
import "./style.css";

const ModalCloseButton = ({ onClick }) => (
  <button
    className="button__body"
    onClick={onClick}
  >
    <div className="button__icon">
      <div className="icon__wrapper">
        <CloseIcon />
      </div>
    </div>
  </button>
);

export default ModalCloseButton;