import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageContent from "./PageContent";

export default function ContactPage() {
  return (
    <main className="page-wrapper">
      <Navbar />
      <PageContent />
      <Footer />
    </main>
  );
}
