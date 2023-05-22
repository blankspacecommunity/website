import React, { useState, useEffect } from "react";
import { getUserProfileDetails } from "../../../scripts/firebase/database/database";
import { auth } from "../../../scripts/firebase/config/firebaseConfig";
import ToastModal from "../../../components/ToastModal/ToastModal";
import parseError from "../../../helpers/parseError";

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

  const [userDetails, setUserDetails] = useState({});
  const [selectedDegree, setSelectedDegree] = useState("B.Tech");
  const [course, setCourse] = useState("Computer Science");

  const [pageLoaded, setPageLoaded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  let toastData = {};
  const [toastContent, setToastContent] = useState({
    title: "",
    code: "",
    message: "",
    delay: 0,
    position: "top-end",
  });

  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear -1 , currentYear - 2, currentYear - 3, currentYear -4];

  // get the user details from the database
  const fetchUserDetails = async (uid) => {
    try {
      const userProfileDetails = await getUserProfileDetails(uid);

      setUserDetails({
        name: userProfileDetails.data.name,
        email: userProfileDetails.data.email,
        username: userProfileDetails.data.username,
        phoneNumber: userProfileDetails.data.phoneNumber,
        bio: userProfileDetails.data.bio,
        course: userProfileDetails.data.course,
        degree: userProfileDetails.data.degree,
        discordProfile: userProfileDetails.data.discordProfile,
        githubProfile: userProfileDetails.data.githubProfile,
        linkedinProfile: userProfileDetails.data.linkedinProfile,
        twitterProfile: userProfileDetails.data.twitterProfile,
        residentialStatus: userProfileDetails.data.residentialStatus,
        yearOfAdmission: userProfileDetails.data.yearOfAdmission,
        haveExperience: userProfileDetails.data.haveExperience,
        isLearning: userProfileDetails.data.isLearning,
        admissionNumber: userProfileDetails.data.admissionNumber,
        location: userProfileDetails.data.location,
      });

      console.log("data: ", userProfileDetails);


    } catch (error) {
      localStorage.removeItem("userProfileDetailsCache");
      toastData = parseError(error.code);
      setToastContent(toastData);
      setShowToast(true);
    }
  };

  // get the user details from the database when the profile section is active
  // TODO: useEffect is calling twice, fix it
  useEffect(() => {
    try {
      auth.onAuthStateChanged((user) => {
        if (user) {
          const { uid } = user;
          fetchUserDetails(uid);
        }
      });
    } catch (error) {
      toastData = parseError(error.code);
      setToastContent(toastData);
      setShowToast(true);
    }

  }, []);

  function submitUserDetails(e){
    e.preventDefault();
    console.log(userDetails);
  }

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
              <label htmlFor="name" className="form-label fs-base">
                Full name
              </label>
              <input
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                value={userDetails.name}
                type="text"
                id="name"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="phoneNumber" className="form-label fs-base">
                Phone number{" "}
                <small className="text-muted">(preferably whatsapp 💚)</small>
              </label>
              <input
                onChange={(e) => setUserDetails({ ...userDetails, phoneNumber: e.target.value })}
                value={userDetails.phoneNumber}
                type="text"
                id="phoneNumber"
                className="form-control form-control-lg"
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
                onChange={(e) => setUserDetails({ ...userDetails, bio: e.target.value })}
                value={userDetails.bio}
                id="bio"
                className="form-control form-control-lg"
                rows="4"
                placeholder="Add a shooooort bio..."
              />
            </div>
            <div className="col-12 mb-4">
              <label htmlFor="haveExperience" className="form-label fs-base">
                Languages & tools you have experience in{" "}
                <small className="text-muted">
                  (seperate with comma)
                </small>
              </label>
              <textarea
                onChange={(e) => setUserDetails({ ...userDetails, haveExperience: e.target.value })}
                value={userDetails.haveExperience}
                id="haveExperience"
                className="form-control form-control-lg"
                rows="4"
                placeholder="For example: HTML, CSS, JavaScript, React, Node.js, MongoDB, etc."
              />
            </div>
            <div className="col-12 mb-4">
              <label htmlFor="isLearning" className="form-label fs-base">
                Languages & tools you are learning{" "}
                <small className="text-muted">
                  (seperate with comma)
                </small>
              </label>
              <textarea
                onChange={(e) => setUserDetails({ ...userDetails, isLearning: e.target.value })}
                value={userDetails.isLearning}
                id="isLearning"
                className="form-control form-control-lg"
                rows="4"
                placeholder="For example: HTML, CSS, JavaScript, React, Node.js, MongoDB, etc."
              />
            </div>
          </div>
        </form>

        <h2 className="h5 text-primary pt-1 pt-lg-3 my-4">
          Academic Information
        </h2>
        <p>
          No worries, your academic info won&apos;t be used for submitting assignments. Admission number is mandatory for identity verification, Both admission number and location remain confidential on your profile.
        </p>
        <form
          className="needs-validation border-bottom pb-2 pb-lg-4"
          noValidate
        >
          <div className="row pb-2">
            <div className="col-sm-6 mb-4">
              <label htmlFor="yearOfAdmission" className="form-label fs-base">Year of admission</label>
              <select
                id="yearOfAdmission"
                className="form-select form-select-lg"
                required
                onChange={(e) => setUserDetails({ ...userDetails, yearOfAdmission: e.target.value })}
                value={userDetails.yearOfAdmission}
              >
                <option value="" disabled>
                  Choose year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
                
              </select>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="admissionNumber" className="form-label fs-base">Admission number{" "}<small className="text-muted">(not visible in public profile)</small></label>
              <input
                onChange={(e) => setUserDetails({ ...userDetails, admissionNumber: e.target.value })}
                value={userDetails.admissionNumber}
                type="number"
                id="admissionNumber"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="degree" className="form-label fs-base">
                Degree
              </label>
              <select
                id="degree"
                className="form-select form-select-lg"
                required
                onChange={(e) => setUserDetails({ ...userDetails, degree: e.target.value })}
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
              <label htmlFor="course" className="form-label fs-base">
                Course/Program
              </label>
              <select
                id="course"
                className="form-select form-select-lg"
                required
                onChange={(e) => setUserDetails({ ...userDetails, course: e.target.value })}
                value={userDetails.course}
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
              <label htmlFor="residentialStatus" className="form-label fs-base">
                Residential Status
              </label>
              <select
                id="residentialStatus"
                className="form-select form-select-lg"
                required
                onChange={(e) => setUserDetails({ ...userDetails, residentialStatus: e.target.value })}
                value={userDetails.residentialStatus}
              >
                <option value="" disabled>
                  Choose Residential Status
                </option>
                <option value="Boston">Hosteler</option>
                <option value="Chicago">Day Scholar</option>
              </select>
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="location" className="form-label fs-base">Location
                {" "}<small className="text-muted">(not visible in public profile)</small></label>
              <input
                onChange={(e) => setUserDetails({ ...userDetails, location: e.target.value })}
                value={userDetails.location}
                type="text"
                id="location"
                className="form-control form-control-lg"

              />
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
              <label htmlFor="linkedinProfile" className="form-label fs-base">
                LinkedIn
              </label>
              <input
                onChange={(e) => setUserDetails({ ...userDetails, linkedinProfile: e.target.value })}
                value={userDetails.linkedinProfile}
                type="text"
                id="linkedinProfile"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="discordProfile" className="form-label fs-base">
                Discord
              </label>
              <input
                onChange={(e) => setUserDetails({ ...userDetails, discordProfile: e.target.value })}
                value={userDetails.discordProfile}
                type="text"
                id="discordProfile"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="githubProfile" className="form-label fs-base">
                Github
              </label>
              <input
                type="text"
                onChange={(e) => setUserDetails({ ...userDetails, githubProfile: e.target.value })}
                value={userDetails.githubProfile}
                id="githubProfile"
                className="form-control form-control-lg"
                required
              />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="twitterProfile" className="form-label fs-base">
                Twitter
              </label>
              <input
                onChange={(e) => setUserDetails({ ...userDetails, twitterProfile: e.target.value })}
                value={userDetails.twitterProfile}
                type="text"
                id="twitterProfile"
                className="form-control form-control-lg"
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div className="d-flex mb-3">
        <button type="submit" className="btn btn-primary" onClick={submitUserDetails}>
          Save changes
        </button>
      </div>
    </div>
  );
}
