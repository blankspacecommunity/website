import React, { useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { createAccountWithEmailAndPassword } from "../../scripts/firebase/authentication/authentication";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handlePasswordToggle = (e, ref) => {
    if (ref.current.type === "password") {
      ref.current.type = "text";
    } else {
      ref.current.type = "password";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let toastData = {};

    // UNDER 15 characters, can only contain letters, numbers and underscores
    // /i is for allowing both upper and lower chars
    const regex = /^[a-z0-9_]{1,15}$/i;

    if (!(email.includes("@bsemail.web.app") || email.includes(".ajce.in"))) {
      toastData = parseError("client/not-college-mail");

      setToastContent(toastData);
      setShowToast(true);
      return;
    }

    if (!regex.test(username)) {
      toastData = parseError("client/invalid-username");

      setToastContent(toastData);
      setShowToast(true);
      return;
    }

    if (password.length < 6) {
      toastData = parseError("client/password-too-short");
      setToastContent(toastData);
      setShowToast(true);
      return;
    }

    if (password !== confirmPassword) {
      toastData = parseError("client/passwords-dont-match");

      setToastContent(toastData);
      setShowToast(true);
      return;
    }

    const authResponse = await createAccountWithEmailAndPassword(
      name,
      email,
      username,
      password
    );

    if (authResponse.user) {
      setUser(authResponse.user);
      navigate("/dashboard");
    }

    if (authResponse.error) {
      toastData = parseError(authResponse.error.code);

      setToastContent(toastData);
      setShowToast(true);
    }
  };
  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="position-relative mb-4">
              <label htmlFor="name" className="form-label fs-base">
                Full name
              </label>
              <input
                type="text"
                id="name"
                className="form-control form-control-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="invalid-feedback position-absolute start-0 top-100">
                Please enter your name!
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="position-relative mb-4">
              <label htmlFor="email" className="form-label fs-base">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control form-control-lg"
                required
              />
              <div className="invalid-feedback position-absolute start-0 top-100">
                Please enter a valid email address!
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="position-relative mb-4">
              <label htmlFor="username" className="form-label fs-base">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="form-control form-control-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="invalid-feedback position-absolute start-0 top-100">
                Please enter your username!
              </div>
            </div>
          </div>
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
        </div>
        <button
          type="submit"
          className="btn btn-primary shadow-primary btn-lg w-100"
        >
          Sign up
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
