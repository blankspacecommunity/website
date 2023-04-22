import React from "react";

export default function FormContent() {
  return (
    <>
      <form className="needs-validation" noValidate>
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
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
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
                required
              />
              <label
                className="password-toggle-btn"
                aria-label="Show/hide password"
              >
                <input className="password-toggle-check" type="checkbox" />
                <span className="password-toggle-indicator"></span>
              </label>
              <div className="invalid-feedback position-absolute start-0 top-100">
                Please enter a password!
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="form-check">
            <input type="checkbox" id="terms" className="form-check-input" />
            <label htmlFor="terms" className="form-check-label fs-base">
              I agree to{" "}
              <a href="account-signup.html#">Terms &amp; Conditions</a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary shadow-primary btn-lg w-100"
        >
          Sign up
        </button>
      </form>
    </>
  );
}
