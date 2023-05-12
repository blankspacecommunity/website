import React from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

export default function ToastModal({
  toastContent = "",
  showToast = true,
  setShowToast = () => {},
}) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={toastContent.delay}
        position={toastContent.position}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{toastContent.title}</strong>
          <small>{toastContent.code}</small>
        </Toast.Header>
        <Toast.Body>{toastContent.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
