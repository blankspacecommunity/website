import React from "react";

export default function SignUpPage() {
  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
        <div
          className="w-100 align-self-end pt-1 pt-md-4 pb-4"
          style={{ maxWidth: "526px" }}
        >
          <h1 className="text-center text-xl-start">Create Account</h1>
          <p className="text-center text-xl-start pb-3 mb-3">
            Already have an account?{" "}
            <a href="account-signin.html">Sign in here.</a>
          </p>
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
                <label
                  htmlFor="password-confirm"
                  className="form-label fs-base"
                >
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
                <input
                  type="checkbox"
                  id="terms"
                  className="form-check-input"
                />
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
        </div>
        <div className="w-100 align-self-end">
          <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
            &copy;{new Date().getFullYear()} BlankSpace - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
