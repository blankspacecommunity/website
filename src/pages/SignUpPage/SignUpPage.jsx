import React from "react";
import FormHeader from "./FormHeader";
import FormContent from "./FormContent";
import Footer from "./Footer";

export default function SignUpPage() {
  return (
    <div>
      <header className="header navbar navbar-expand-lg position-absolute navbar-sticky">
        <div className="container px-3">
          <a href="index.html" className="navbar-brand pe-3">
            <img src="src/assets/img/logo.svg" width="47" alt="Silicon" />
            BlankSpace
          </a>
          <div id="navbarNav" className="offcanvas offcanvas-end">
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Landings
                  </a>
                  <div className="dropdown-menu p-0">
                    <div className="d-lg-flex">
                      <div
                        className="mega-dropdown-column d-flex justify-content-center align-items-center rounded-3 rounded-end-0 px-0"
                        style={{ margin: "-1px", backgroundColor: "#f3f6ff" }}
                      >
                        <img src="src/assets/img/landings.jpg" alt="Landings" />
                      </div>
                      <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a href="index.html" className="dropdown-item">
                              Template Intro Page
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-mobile-app-showcase-v1.html"
                              className="dropdown-item"
                            >
                              Mobile App Showcase v.1
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-mobile-app-showcase-v2.html"
                              className="dropdown-item"
                            >
                              Mobile App Showcase v.2
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-product.html"
                              className="dropdown-item d-flex align-items-center"
                            >
                              Product Landing
                            </a>
                          </li>
                          <li>
                            <a
                              href="landing-saas-v4.html"
                              className="dropdown-item"
                            >
                              SaaS v.4
                              <span className="badge bg-success ms-2">New</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="mega-dropdown-column pt-lg-3 pb-lg-4"
                        style={{ "--si-mega-dropdown-column-width": "16rem" }}
                      >
                        <ul className="list-unstyled mb-0">
                          <li>
                            <a
                              href="landing-blog.html"
                              className="dropdown-item"
                            >
                              Blog Homepage
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
        <div
          className="w-100 align-self-end pt-1 pt-md-4 pb-4"
          style={{ maxWidth: "526px" }}
        >
          <FormHeader />
          <FormContent />
        </div>
        <Footer />
      </div>
      <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"></div>
    </div>
  );
}
