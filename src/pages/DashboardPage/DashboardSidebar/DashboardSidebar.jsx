import { React, useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../../scripts/firebase/config/firebaseConfig";
import { signOutUser } from "../../../scripts/firebase/authentication/authentication";
import { getUserProfileDetails } from "../../../scripts/firebase/database/database";
import ToastModal from "../../components/ToastModal/ToastModal";

export default function DashboardSidebar() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [profileSectionActive, setProfileSectionActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    code: "",
    message: "",
    delay: 0,
    position: "top-end",
  });

  useEffect(() => {
    setProfileSectionActive(location.pathname === "/dashboard/profile");
  }, [location]);

  const fetchUserDetails = async (uid) => {
    const userProfileDetails = await getUserProfileDetails(uid);
    console.log(userProfileDetails);
  };

  useEffect(() => {
    if (profileSectionActive) {
      try {
        auth.onAuthStateChanged((user) => {
          if (user) {
            const { uid } = user;
            fetchUserDetails(uid);
          }
        });
      } catch (error) {}
    }
  }, [profileSectionActive]);

  return (
    <aside className="col-lg-3 col-md-4 border-end pb-5 mt-n5">
      <div className="position-sticky top-0">
        <div className="text-center pt-5">
          <div className="d-table position-relative mx-auto mt-2 mt-lg-4 pt-5 mb-3">
            <img
              src="src/assets/img/avatar/18.jpg"
              className="d-block rounded-circle"
              width="120"
              alt="John Doe"
            />
            <button
              type="button"
              className="btn btn-icon btn-light bg-white btn-sm border rounded-circle shadow-sm position-absolute bottom-0 end-0 mt-4"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Change picture"
            >
              <i className="bx bx-refresh" />
            </button>
          </div>
          <h2 className="h5 mb-1">{username || "error :("}</h2>
          <p className="mb-3 pb-3">{userEmail || "error :("}</p>
          <button
            type="button"
            className="btn btn-secondary w-100 d-md-none mt-n2 mb-3"
            data-bs-toggle="collapse"
            data-bs-target="#account-menu"
          >
            <i className="bx bxs-user-detail fs-xl me-2" />
            Account menu
            <i className="bx bx-chevron-down fs-lg ms-1" />
          </button>
          <div
            id="account-menu"
            className="list-group list-group-flush collapse d-md-block"
          >
            <NavLink
              href="account-details.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
              to="/dashboard/profile"
            >
              <i className="bx bx-cog fs-xl opacity-60 me-2" />
              Profile Information
            </NavLink>
            <NavLink
              to="/dashboard/projects"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-lock-alt fs-xl opacity-60 me-2" />
              Your projects
            </NavLink>
            <NavLink
              to="/dashboard/NOTDONEYET"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-bell fs-xl opacity-60 me-2" />
              All projects
            </NavLink>
            <button
              type="button"
              onClick={async () => {
                const response = await signOutUser();
                if (!response.error) navigate("/signin");
              }}
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-log-out fs-xl opacity-60 me-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
