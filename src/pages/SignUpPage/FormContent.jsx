import React, { useRef, useState } from "react";
import { createAccountWithEmailAndPassword } from "../../scripts/firebase/authentication/authentication";

export default function FormContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

    // Validation
    if (password.length < 6) {
      alert("Password should be 6 or more characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords should match");
      return;
    }

    // @AkhilLV please check naming convention
    const authResponse = await createAccountWithEmailAndPassword(
      name,
      email,
      password
    );
    if (authResponse.user) {
      setUser(authResponse.user);
      console.log("firebase-auth-user:", authResponse.user);
    }
    if (authResponse.error) {
      console.log("firebase-auth-sign-up-error:", authResponse.error);
      console.log("firebase-auth-sign-up-error-code:", authResponse.error.code);

      if (authResponse.error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
    }
  };
  // why getting eslint error near labels?
  return (
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
  );
}
