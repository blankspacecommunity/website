import React, { useState, useEffect } from "react";
import { getUserProfileDetails } from "../../../scripts/firebase/database/database";
import { auth } from "../../../scripts/firebase/config/firebaseConfig";
/* 
  auth.currentUser is an object that contains the following properties:
  displayName, email, emailVerified, phoneNumber, photoURL, uid, providerData
*/
export default function Profile() {
  const map = {
    "B.Tech": [
      "Chemical Engineering",
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Electrical and Electronics Engineering",
      "Food Technology",
      "Information Technology",
      "Mechanical Engineering",
      "Mechanical Engineering (Automobile)",
      "	Metallurgical & Materials Engineering",
    ],
    "M.Tech": [
      "Computer- Aided Structural Engineering",
      "Structural Engineering & Construction Management",
      "Communication Engineering",
      "Computer Science and Engineering",
      "Energy Systems",
      "Power Electronics & Power Systems",
      "Machine Design",
      "Nano Technology",
      "Environmental Engineering",
    ],
    "BCA/MCA": ["MCA (2 years)", "MCA Integrated (5 years)"],
  };

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");

  const [yearOfAdmission, setYearOfAdmission] = useState(2023);
  const [selectedDegree, setSelectedDegree] = useState("B.Tech");
  const [course, setCourse] = useState("Computer Science");
  const [residentialStatus, setResidentialStatus] = useState("Hosteler");

  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [discord, setDiscord] = useState("");
  const [twitter, setTwitter] = useState("");

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
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
              <div className="invalid-feedback">
                Please enter your full name!
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="phone" className="form-label fs-base">
                Phone{" "}
                <small className="text-muted">(preferably whatsapp 💚)</small>
              </label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                type="text"
                id="phone"
                className="form-control form-control-lg"
                data-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
                placeholder=""
              />
            </div>
            <div className="col-12 mb-4">
              <label htmlFor="bio" className="form-label fs-base">
                Bio{" "}
                <small className="text-muted">
                  (optional, feel free to boast here 😉)
                </small>
              </label>
              <textarea
                onChange={(e) => setBio(e.target.value)}
                value={bio}
                id="bio"
                className="form-control form-control-lg"
                rows="4"
                placeholder="Add a shooooort bio..."
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
                onChange={(e) => setYearOfAdmission(e.target.value)}
                value={yearOfAdmission}
              >
                <option value="" disabled>
                  Choose year
                </option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="state" className="form-label fs-base">
                Degree name
              </label>
              <select
                id="state"
                className="form-select form-select-lg"
                required
                onChange={(e) => setSelectedDegree(e.target.value)}
              >
                <option value="" disabled>
                  Choose degree
                </option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="BCA/MCA">BCA/MCA</option>
              </select>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="state" className="form-label fs-base">
                Course/Program
              </label>
              <select
                id="state"
                className="form-select form-select-lg"
                required
                onChange={(e) => setCourse(e.target.value)}
                value={course}
              >
                <option value="" disabled>
                  Choose course/program
                </option>
                {map[selectedDegree].map((courseOption) => (
                  <option value="BCA/MCA">{courseOption}</option>
                ))}
              </select>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="city" className="form-label fs-base">
                Residential Status
              </label>
              <select
                id="city"
                className="form-select form-select-lg"
                required
                onChange={(e) => setResidentialStatus(e.target.value)}
                value={residentialStatus}
              >
                <option value="" disabled>
                  Choose Residential Status
                </option>
                <option value="Boston">Hosteler</option>
                <option value="Chicago">Day Scholar</option>
              </select>
            </div>
          </div>
        </form>

        <h2 className="h5 text-primary pt-1 pt-lg-3 my-4">Social Links</h2>
        <p>
          Are you tired of being a social media outcast? Fear not, adding your
          GitHub account to your profile is the first step towards social
          acceptance! Trust us, it&apos;s worth it.{" "}
        </p>
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
                onChange={(e) => setLinkedIn(e.target.value)}
                value={linkedIn}
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                Discord
              </label>
              <input
                onChange={(e) => setDiscord(e.target.value)}
                value={discord}
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                Github
              </label>
              <input
                type="text"
                onChange={(e) => setGithub(e.target.value)}
                value={github}
                id="fn"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="fn" className="form-label fs-base">
                Twitter
              </label>
              <input
                onChange={(e) => setTwitter(e.target.value)}
                value={twitter}
                type="text"
                id="fn"
                className="form-control form-control-lg"
                required
              />
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
