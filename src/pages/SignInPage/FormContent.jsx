import React from "react";
import { Link } from "react-router-dom";

export default function FormContent() {
  return (
    <>
      <form className="needs-validation mb-2" noValidate>
        <div className="position-relative mb-4">
          <label htmlFor="email" className="form-label fs-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
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
        <div className="mb-4">
          <div className="form-check">
            <input type="checkbox" id="remember" className="form-check-input" />
            <label htmlFor="remember" className="form-check-label fs-base">
              Remember me
            </label>
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
    </>
  );
}
