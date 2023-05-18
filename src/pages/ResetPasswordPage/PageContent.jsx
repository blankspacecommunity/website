import React from "react";
import { Link } from "react-router-dom";
import FormContent from "./FormContent";

export default function PageContent() {
  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
      <div
        className="w-100 align-self-end pt-1 pt-md-4 pb-4"
        style={{ maxWidth: "526px" }}
      >
        <h1 className="text-center text-xl-start">Reset Password</h1>
        <p className="text-center text-xl-start pb-3 mb-3">
          Got your password? <Link to="/signin">Sign in here.</Link>
        </p>

        <FormContent />
      </div>
    </div>
  );
}
