import React from "react";

export default function Profile() {
  return (
    <div className="col-md-8 offset-lg-1 pb-5 mb-2 mb-lg-4 pt-md-5 mt-n3 mt-md-0">
      <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">
        <h1 className="h2 pt-xl-1 pb-3">Account Details</h1>

        <h2 className="h5 text-primary mb-4">Basic info</h2>
        <form
          className="needs-validation border-bottom pb-3 pb-lg-4"
          noValidate
        >
          <div className="row pb-2">
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                Full name
              </label>
              <input
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
              <div className="invalid-feedback">
                Please enter your first name!
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="phone" className="form-label fs-base">
                Phone{" "}
                <small className="text-muted">(preferrably whatsapp)</small>
              </label>
              <input
                type="text"
                id="phone"
                className="form-control form-control-lg"
                data-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
                placeholder="+1 ___ ___ __"
              />
            </div>
            <div className="col-12 mb-4">
              <label htmlFor="bio" className="form-label fs-base">
                Bio{" "}
                <small className="text-muted">
                  (optional, feel free to boast here ;))
                </small>
              </label>
              <textarea
                id="bio"
                className="form-control form-control-lg"
                rows="4"
                placeholder="Add a short bio..."
              />
            </div>
          </div>
        </form>

        <h2 className="h5 text-primary pt-1 pt-lg-3 my-4">
          Academic Information
        </h2>
        <form
          className="needs-validation border-bottom pb-2 pb-lg-4"
          noValidate
        >
          <div className="row pb-2">
            <div className="col-sm-6 mb-4">
              <label className="form-label fs-base">Year of admission</label>
              <select
                id="country"
                className="form-select form-select-lg"
                required
              >
                <option value="" disabled>
                  Choose country
                </option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
              <div className="invalid-feedback">
                Please choose your country!
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="state" className="form-label fs-base">
                Course/Program
              </label>
              <select
                id="state"
                className="form-select form-select-lg"
                required
              >
                <option value="" disabled>
                  Choose course/program
                </option>
                <option value="Arizona">Computer Science</option>
                <option value="California">Information Technonlogy</option>
                <option value="Iowa">Electrical Engineering</option>
                <option value="Florida">Civil Engineering</option>
              </select>
              <div className="invalid-feedback">Please choose your state!</div>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="city" className="form-label fs-base">
                Residential Status
              </label>
              <select id="city" className="form-select form-select-lg" required>
                <option value="" disabled>
                  Choose Residential Status
                </option>
                <option value="Boston">Hosteller</option>
                <option value="Chicago">Day Scholar</option>
              </select>
              <div className="invalid-feedback">Please choose your city!</div>
            </div>
          </div>
        </form>

        <h2 className="h5 text-primary pt-1 pt-lg-3 my-4">Social Links</h2>
        <form
          className="needs-validation border-bottom pb-2 pb-lg-4"
          noValidate
        >
          <div className="row pb-2">
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                LinkedIn
              </label>
              <input
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
              <div className="invalid-feedback">
                Please choose your country!
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                Discord
              </label>
              <input
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
              <div className="invalid-feedback">
                Please choose your country!
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                Github
              </label>
              <input
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
              <div className="invalid-feedback">
                Please choose your country!
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                Twitter
              </label>
              <input
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
              <div className="invalid-feedback">
                Please choose your country!
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex mb-3">
        <button type="submit" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  );
}
