import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import { auth } from "../../scripts/firebase/config/firebaseConfig";

export default function DashboardPage() {
  const user = auth.currentUser;

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
