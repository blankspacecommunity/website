import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { signInUserWithEmailAndPassword } from "../../scripts/firebase/authentication/authentication";
import ToastModal from "../../components/ToastModal/ToastModal";

import parseError from "../../helpers/parseError";

export default function FormContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    code: "",
    message: "",
    delay: 0,
    position: "top-end",
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const passwordResetFromUrl = searchParams.get("password-reset");
  const [passwordReset, setPasswordReset] = useState(false);

  useEffect(() => {
    setPasswordReset(passwordResetFromUrl === "true");
    if (passwordReset === true) {
      setToastContent({
        title: "Password reset successful!",
        code: "",
        message:
          "An email with instructions on how to set a new password has been sent to your registered email address. Please check your inbox and follow the instructions provided before signing in.",
        delay: 10000,
        position: "top-end",
      });
      setShowToast(true);
    }
  }, [passwordResetFromUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // disable button while loading
    setIsLoading(true);
    let toastData = {};

    // check if email is college email
    if (!(email.includes("@bsemail.web.app") || email.includes(".ajce.in"))) {
      toastData = parseError("client/not-college-mail");

      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
      return;
    }

    // if college email, try to sign in
    const authResponse = await signInUserWithEmailAndPassword(email, password);

    // if sign in successful, redirect to dashboard
    if (authResponse.user) {
      navigate("/dashboard");
    }

    // if sign in failed, show error
    if (authResponse.error) {
      toastData = parseError(authResponse.error.code);

      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
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
          disabled={isLoading}
        >
          Sign in
        </button>
      </form>
      <Link to="/resetpassword" className="btn btn-link btn-lg w-100">
        Forgot password?
      </Link>

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
