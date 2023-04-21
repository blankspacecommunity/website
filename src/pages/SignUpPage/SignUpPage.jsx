import React from "react";
import FormHeader from "./FormHeader";
import FormContent from "./FormContent";
import Footer from "./Footer";

export default function SignUpPage() {
  return (
    <div>
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
