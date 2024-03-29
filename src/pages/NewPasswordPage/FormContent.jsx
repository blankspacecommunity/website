import React, { useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation, useNavigate } from "react-router-dom";
import ToastModal from "../../components/ToastModal/ToastModal";
import parseError from "../../helpers/parseError";
import { verifyNewPassword } from "../../scripts/firebase/authentication/authentication";

export default function FormContent() {
  // Toast
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    code: "",
    message: "",
    delay: 0,
    position: "top-end",
  });

  // States
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Navigate and location
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Refs
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  // parse url
  const passwordVerificationCode = searchParams.get("oobCode");
  const passwordVerificationMode = searchParams.get("mode");

  // toggle password visibility
  const handlePasswordToggle = (e, ref) => {
    if (ref.current.type === "password") {
      ref.current.type = "text";
    } else {
      ref.current.type = "password";
    }
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // disable button while loading
    setIsLoading(true);
    let toastData = {};

    // check if password is less than 6 characters
    if (password.length < 6) {
      toastData = parseError("client/password-too-short");
      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
      return;
    }

    // check if passwords match
    if (password !== confirmPassword) {
      toastData = parseError("client/passwords-dont-match");
      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
      return;
    }

    // check if password reset link has mode=resetPassword
    if (passwordVerificationMode !== "resetPassword") {
      toastData = parseError("client/invalid-password-reset-link");
      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
      return;
    }

    // verify password
    const verificationDetails = await verifyNewPassword(
      passwordVerificationCode,
      password
    );

    // if no error, navigate to sign in page with query param
    if (!verificationDetails.error) {
      navigate("/signin?new-password=true");
    } else {
      // if error, show toast
      toastData = parseError(verificationDetails.code);
      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="needs-validation mb-2" onSubmit={handleSubmit}>
        <div className="col-12 mb-4">
          <label htmlFor="password" className="form-label fs-base">
            Password
          </label>
          <div className="password-toggle">
            <input
              type="password"
              id="password"
              className="form-control form-control-lg"
              ref={passwordRef}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="password-toggle-btn"
              aria-label="Show/hide password"
            >
              <input
                className="password-toggle-check"
                type="checkbox"
                onClick={(e) => handlePasswordToggle(e, passwordRef)}
              />
              <span className="password-toggle-indicator" />
            </label>
            <div className="invalid-feedback position-absolute start-0 top-100">
              Please enter a password!
            </div>
          </div>
        </div>
        <div className="col-12 mb-4">
          <label htmlFor="password-confirm" className="form-label fs-base">
            Confirm password
          </label>
          <div className="password-toggle">
            <input
              type="password"
              id="password-confirm"
              className="form-control form-control-lg"
              ref={confirmPasswordRef}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label
              className="password-toggle-btn"
              aria-label="Show/hide password"
            >
              <input
                className="password-toggle-check"
                type="checkbox"
                onClick={(e) => handlePasswordToggle(e, confirmPasswordRef)}
              />
              <span className="password-toggle-indicator" />
            </label>
            <div className="invalid-feedback position-absolute start-0 top-100">
              Please enter a password!
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary shadow-primary btn-lg w-100"
          disabled={isLoading}
        >
          Change Password
        </button>
      </form>
      <Row>
        <Col xs={6}>
          <ToastModal
            showToast={showToast}
            setShowToast={setShowToast}
            toastContent={toastContent}
          />
        </Col>
      </Row>
    </>
  );
}
