import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../components/AuthPageImage/BackgroundImage";
import PageContent from "./PageContent";

export default function SignUpPage() {
  return (
    <main className="page-wrapper">
      <Navbar />
      <PageContent />
      <BackgroundImage />
    </main>
  );
}
