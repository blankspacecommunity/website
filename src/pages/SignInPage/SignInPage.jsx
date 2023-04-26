import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "./BackgroundImage";
import PageContent from "./PageContent";

export default function SignInPage() {
  return (
    <main className="page-wrapper">
      <Navbar />
      <PageContent />
      <BackgroundImage />
    </main>
  );
}
