import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import ToastModal from "../../components/ToastModal/ToastModal";
import parseError from "../../helpers/parseError";
import { resetPassword } from "../../scripts/firebase/authentication/authentication";

export default function FormContent() {
  // Toast
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    code: "",
    message: "",
    delay: 0,
    position: "top-end",
  });

  // States
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Navigate
  const navigate = useNavigate();

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // disable button while loading
    setIsLoading(true);
    let toastData = {};

    // check if email is college email
    if (!(email.includes("@bsemail.web.app") || email.includes(".ajce.in"))) {
      toastData = parseError("client/not-college-mail");
      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
      return;
    }

    // if college email, try to send reset password link
    const authResponse = await resetPassword(email);

    // if error, show toast
    if (authResponse.error) {
      toastData = parseError(authResponse.error.code);
      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
    } else {
      // if success navigate to sign in page with query param
      setIsLoading(false);
      navigate("/signin?password-reset=true");
    }
  };

  return (
    <>
      <form className="needs-validation mb-2" onSubmit={handleSubmit}>
        <div className="position-relative mb-4">
          <label htmlFor="email" className="form-label fs-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary shadow-primary btn-lg w-100"
          disabled={isLoading}
        >
          Reset Password
        </button>
      </form>
      <Row>
        <Col xs={6}>
          <ToastModal
            showToast={showToast}
            setShowToast={setShowToast}
            toastContent={toastContent}
          />
        </Col>
      </Row>
    </>
  );
}
