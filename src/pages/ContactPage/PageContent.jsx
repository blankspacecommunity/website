import React from "react";
import { Link } from "react-router-dom";

export default function PageContent() {
  return (
    <>
      <section
        className="dark-mode position-relative pt-5"
        style={{ backgroundColor: "#151922" }}
      >
        {/* Content */}
        <div className="container position-relative zindex-2 pt-5 pb-2 pb-md-0">
          {/* Breadcrumb */}
          <nav className="pt-lg-4" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="index.html">
                  <i className="bx bx-home-alt fs-lg me-1"></i>Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contacts
              </li>
            </ol>
          </nav>
          <div className="row justify-content-center pt-3 mt-3">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
              <h1 className="mb-4">Get in Touch</h1>
              <p className="fs-lg pb-3 mb-3">
                Got a Question, Feedback, or Suggestions? Get in Touch with Us
                via Email for Prompt Assistance and Collaboration!
              </p>
            </div>
          </div>
        </div>
        {/* Bottom shape */}
        <div
          className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n5"
          style={{ color: "#151922" }}
        >
          <div
            className="position-relative start-50 translate-middle-x flex-shrink-0 mt-n5 mt-md-n3 mt-lg-n1"
            style={{ width: "3788px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3788"
              height="144"
              viewBox="0 0 3788 144"
            >
              <path
                fill="currentColor"
                d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="container py-5 my-md-2 my-lg-4 my-xl-5">
        <div className="row justify-content-center pt-5 pb-1 pb-sm-2 pb-md-3">
          <div className="col-xxl-8 col-xl-9 col-lg-10 pt-sm-2 pt-md-5">
            <div className="d-sm-flex justify-content-center">
              <div className="d-flex flex-column w-sm-50 border-0 bg-transparent text-center px-sm-1 px-md-5 pb-3 pb-sm-0 mb-4 mb-sm-0">
                <div className="card-body p-0">
                  <div className="d-inline-block bg-secondary text-primary rounded-circle fs-3 lh-1 p-3 mb-3">
                    <i className="bx bx-envelope" />
                  </div>
                  <p className="pb-2 pb-sm-3 mb-3">
                    Please feel free to drop us a line. We will respond as soon
                    as possible.
                  </p>
                </div>
                <div className="card-footer border-0 p-0">
                  <a
                    href="mailto:blankspacecommunity@gmail.com"
                    className="btn btn-lg btn-primary"
                  >
                    Send email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
