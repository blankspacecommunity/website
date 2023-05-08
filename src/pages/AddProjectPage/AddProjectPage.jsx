import React, { useState } from "react";
import { getUserProfileDetails } from "../../scripts/firebase/database/database";

import Project from "../../scripts/firebase/database/Project";

export default function AddProject() {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [languagesUsed, setLanguagesUsed] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getUserProfileDetails("QUUx9JR8oycg5LtObzpzEQuFKvz1");

    Project.addProject("test", {
      projectTitle,
      projectLink,
      languagesUsed,
      description,
    });

    console.log(res);
    // Handle firebase stuff here
  };

  return (
    <section className="position-relative pt-2 pt-lg-0 pb-5">
      <div className="container position-relative zindex-5 pb-2 pb-md-4 pb-lg-5">
        <div className="row justify-content-center text-center pt-xl-2 pb-4 mb-1 mb-lg-3">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
            <h2 className="mb-4">Add project</h2>
            <p className="text-muted mb-0">
              Like what you have seen? Let's get started. Just fill in a few
              details and we will get in touch as soon as possible.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <form className="row needs-validation" onSubmit={handleSubmit}>
              <div className="col-sm-6 mb-4">
                <label htmlFor="fn" className="form-label">
                  Project title
                </label>
                <input
                  onChange={(e) => setProjectTitle(e.target.value)}
                  type="text"
                  id="fn"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-sm-6 mb-4">
                <label htmlFor="ln" className="form-label">
                  Link to project(Github)
                </label>
                <input
                  onChange={(e) => setProjectLink(e.target.value)}
                  type="text"
                  id="ln"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-sm-6 mb-4">
                <label htmlFor="company" className="form-label">
                  Languages and tools used(comma separated)
                </label>
                <input
                  onChange={(e) => setLanguagesUsed(e.target.value)}
                  type="text"
                  required
                  id="company"
                  className="form-control"
                />
              </div>
              <div className="col-12 mb-4">
                <label htmlFor="message" className="form-label">
                  Description
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  id="message"
                  className="form-control"
                  rows="4"
                  required
                />
              </div>
              <div className="col-12 text-center pt-2 pt-md-3 pt-lg-4">
                <button
                  type="submit"
                  className="btn btn-primary shadow-primary btn-lg"
                >
                  Add project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="position-absolute end-0 bottom-0 text-primary">
        <svg
          width="469"
          height="343"
          viewBox="0 0 469 343"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M273.631 680.872C442.436 768.853 639.315 708.216 717.593 558.212C795.871 408.208 732.941 212.157 564.137 124.176C395.333 36.195 198.453 96.8326 120.175 246.836C41.8972 396.84 104.827 592.891 273.631 680.872ZM236.335 752.344C440.804 858.914 688.289 788.686 789.109 595.486C889.928 402.286 805.903 159.274 601.433 52.7043C396.964 -53.8654 149.479 16.3623 48.6595 209.562C-52.1598 402.762 31.8652 645.774 236.335 752.344Z"
            fill="currentColor"
          />
          <path
            opacity="0.08"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M298.401 633.404C434.98 704.59 598.31 656.971 664.332 530.451C730.355 403.932 675.946 242.827 539.367 171.642C402.787 100.457 239.458 148.076 173.435 274.595C107.413 401.114 161.822 562.219 298.401 633.404ZM288.455 652.464C434.545 728.606 611.369 678.429 683.403 540.391C755.437 402.353 695.402 228.725 549.312 152.583C403.222 76.4404 226.398 126.617 154.365 264.655C82.331 402.693 142.365 576.321 288.455 652.464Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
