import React from "react";

export default function ContactPage() {
  return (
    <footer className="footer pt-5 pb-4 pb-lg-5">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <img src="src/assets/img/logo.svg" width="47" alt="Silicon" />
              BlankSpace
            </div>
            <p className="fs-sm pb-lg-3 mb-4">
              BlankSpace is a community-driven platform for student developers,
              fostering a collaborative network for students to share and work
              on projects. Our goal is to connect like-minded students, enabling
              them to find assistance, partners, or collaborators for their
              projects.
            </p>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a
                    href="contacts-v1.html#useful-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Useful Links
                  </a>
                </h6>
                <div
                  id="useful-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column pb-lg-1 mb-lg-3">
                    <li className="nav-item">
                      <a
                        href="contacts-v1.html#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="contacts-v1.html#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Features
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="contacts-v1.html#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Integrations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="contacts-v1.html#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Our Clients
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="contacts-v1.html#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        href="contacts-v1.html#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="contacts-v1.html#"
                        className="nav-link d-inline-block px-0 pt-1 pb-2"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-3">
                <h6 className="mb-2">Contact Us</h6>
                <a
                  href="mailto:blankspacecommunity@gmail.com"
                  className="fw-medium"
                >
                  blankspacecommunity@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
          &copy;
          {new Date().getFullYear()} BlankSpace - All rights reserved
        </p>
      </div>
    </footer>
  );
}
