import React from "react";
import { Link } from "react-router-dom";

export default function PageContent() {
  return (
    <section className="container d-flex flex-column h-100 align-items-center position-relative zindex-5 pt-5">
      <div className="text-center pt-5 pb-3 mt-auto">
        <div
          className="parallax mx-auto d-dark-mode-none"
          style={{ maxWidth: "574px" }}
        >
          <div className="parallax-layer" data-depth="-0.15">
            <img src="src/assets/img/404/light/layer01.png" alt="Layer" />
          </div>
          <div className="parallax-layer" data-depth="0.12">
            <img src="src/assets/img/404/light/layer02.png" alt="Layer" />
          </div>
          <div className="parallax-layer zindex-5" data-depth="-0.12">
            <img src="src/assets/img/404/light/layer03.png" alt="Layer" />
          </div>
        </div>

        <div
          className="parallax mx-auto d-none d-dark-mode-block"
          style={{ maxWidth: "574px" }}
        >
          <div className="parallax-layer" data-depth="-0.15">
            <img src="src/assets/img/404/dark/layer01.png" alt="Layer" />
          </div>
          <div className="parallax-layer" data-depth="0.12">
            <img src="src/assets/img/404/dark/layer02.png" alt="Layer" />
          </div>
          <div className="parallax-layer zindex-5" data-depth="-0.12">
            <img src="src/assets/img/404/dark/layer03.png" alt="Layer" />
          </div>
        </div>

        <h1 className="visually-hidden">404</h1>
        <h2 className="display-5">Ooops!</h2>
        <p className="fs-xl pb-3 pb-md-0 mb-md-5">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="btn btn-lg btn-primary shadow-primary w-sm-auto w-100"
        >
          <i className="bx bx-home-alt me-2 ms-n1 lead" />
          Go to homepage
        </Link>
      </div>

      <div className="text-center py-lg-5 py-4 mt-auto">
        <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
          &copy; 2023 BlankSpace - All rights reserved
        </p>
      </div>
    </section>
  );
}
