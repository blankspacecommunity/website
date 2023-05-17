import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./scripts/firebase/config/firebaseConfig";
import App from "./App";

import "./assets/css/theme.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css"; // CSS for icons

import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ContactPage from "./pages/ContactPage/ContactPage";
import Error404 from "./pages/Error404/Error404";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Profile from "./pages/DashboardPage/ProfileSection/Profile";
import Projects from "./pages/DashboardPage/ProjectsSection/Projects";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage";

/*
 * This function is called when the authentication state changes.
 */

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in", user);
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/projects/new",
    element: <AddProjectPage />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
