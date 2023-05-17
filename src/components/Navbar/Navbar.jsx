import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ blackBackground }) {
  return (
    <header className="header navbar navbar-expand-lg position-absolute navbar-sticky">
      <div className="container px-3">
        <a href="index.html" className="navbar-brand pe-3">
          <img src="src/assets/img/logo.svg" width="47" alt="Silicon" />
          BlankSpace
        </a>
        <div
          id="navbarNav"
          className={`offcanvas offcanvas-end ${blackBackground && "bg-dark"}`}
        >
          <div
            className={`offcanvas-header border-bottom ${
              blackBackground && "border-light"
            }`}
          >
            <h5 className="offcanvas-title text-white">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/signin"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                >
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  blackBackground: PropTypes.string.isRequired,
};
