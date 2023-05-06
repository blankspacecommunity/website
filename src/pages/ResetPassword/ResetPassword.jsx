import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../components/AuthPageImage/BackgroundImage";
import PageContent from "./PageContent";

export default function ResetPassword() {
  return (
    <main className="page-wrapper">
      <Navbar />
      <PageContent />
      <BackgroundImage imageUrl="src/assets/img/account/signin-bg.jpg" />
    </main>
  );
}
