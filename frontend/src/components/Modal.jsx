import React from "react";

const Modal = ({ title, message, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onClose} className="btn btn-secondary">Cancel</button>
          <button onClick={onConfirm} className="btn btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
