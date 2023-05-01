import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";

export default function DashboardPage() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="container">
        <div className="row">
          <DashboardSidebar />
        </div>
      </section>
    </div>
  );
}
