import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { signInUserWithEmailAndPassword } from "../../scripts/firebase/authentication/authentication";

export default function FormContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    code: "",
    message: "",
    delay: 0,
    position: "top-end",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authResponse = await signInUserWithEmailAndPassword(email, password);
    if (authResponse.user) {
      console.log("firebase-auth-user:", authResponse.user);
    }
    if (authResponse.error) {
      let toastData = {};
      if (authResponse.error.code === "auth/user-not-found") {
        toastData = {
          title: "User not found",
          code: "",
          message: "We couldn't find an account with that email address.",
          delay: 6000,
          position: "top-end",
        };
      } else if (authResponse.error.code === "auth/wrong-password") {
        toastData = {
          title: "Wrong password",
          code: "",
          message: "The password you entered is incorrect.",
          delay: 6000,
          position: "top-end",
        };
      }

      if (Object.keys(toastData).length > 0) {
        setToastContent(toastData);
        setShowToast(true);
      }
    }
  };

  return (
    <>
      <form className="needs-validation mb-2" onSubmit={handleSubmit}>
        <div className="position-relative mb-4">
          <label htmlFor="email" className="form-label fs-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="invalid-feedback position-absolute start-0 top-100">
            Please enter a valid email address!
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label fs-base">
            Password
          </label>
          <div className="password-toggle">
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              className="password-toggle-btn"
              aria-label="Show/hide password"
            >
              <input className="password-toggle-check" type="checkbox" />
              <span className="password-toggle-indicator" />
            </label>
            <div className="invalid-feedback position-absolute start-0 top-100">
              Please enter your password!
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary shadow-primary btn-lg w-100"
        >
          Sign in
        </button>
      </form>
      <a href="account-signin.html#" className="btn btn-link btn-lg w-100">
        Forgot your password?
      </a>
      <Row>
        <Col xs={6}>
          <ToastContainer position="top-end" className="p-3">
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={toastContent.delay}
              position={toastContent.position}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">{toastContent.title}</strong>
                <small>{toastContent.code}</small>
              </Toast.Header>
              <Toast.Body>{toastContent.message}</Toast.Body>
            </Toast>
          </ToastContainer>
        </Col>
      </Row>
    </>
  );
}
