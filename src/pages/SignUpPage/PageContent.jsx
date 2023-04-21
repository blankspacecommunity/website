import React from "react";
import FormHeader from "./FormHeader";
import FormContent from "./FormContent";
import Footer from "./Footer";

export default function PageContent() {
  return (
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
  );
}
