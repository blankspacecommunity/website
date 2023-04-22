import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardPage from "./components/Sidebar/Sidebar";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
