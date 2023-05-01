import React from "react";

export default function DashboardSidebar() {
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
          <h2 className="h5 mb-1">John Doe</h2>
          <p className="mb-3 pb-3">jonny@email.com</p>
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
            <a
              href="account-details.html"
              className="list-group-item list-group-item-action d-flex align-items-center active"
            >
              <i className="bx bx-cog fs-xl opacity-60 me-2" />
              Accountt Details
            </a>
            <a
              href="account-security.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-lock-alt fs-xl opacity-60 me-2" />
              Security
            </a>
            <a
              href="account-notifications.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-bell fs-xl opacity-60 me-2" />
              Notifications
            </a>
            <a
              href="account-messages.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-chat fs-xl opacity-60 me-2" />
              Messages
            </a>
            <a
              href="account-saved-items.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-bookmark fs-xl opacity-60 me-2" />
              Saved Items
            </a>
            <a
              href="account-collections.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-collection fs-xl opacity-60 me-2" />
              My Collections
            </a>
            <a
              href="account-payment.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-credit-card-front fs-xl opacity-60 me-2" />
              Payment Details
            </a>
            <a
              href="account-signin.html"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="bx bx-log-out fs-xl opacity-60 me-2" />
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
