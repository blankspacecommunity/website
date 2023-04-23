import React, { useState } from "react";
import { createAccountWithEmailAndPassword } from "../../scripts/firebase/authentication/authentication";

export default function FormContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = await createAccountWithEmailAndPassword(
      email,
      password
    );
    setUser(userDetails);
    console.log(user);
  };
  // why getting eslint error near labels?
  return (
    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="password-toggle-btn"
              aria-label="Show/hide password"
            >
              <input className="password-toggle-check" type="checkbox" />
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
