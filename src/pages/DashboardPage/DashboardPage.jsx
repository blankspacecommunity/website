import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";

export default function DashboardPage() {
  return (
    <main className="page-wrapper">
      <Navbar />

      <section className="container">
        <div className="row">
          <DashboardSidebar />
          <Outlet />
        </div>
      </section>
    </main>
  );
}
