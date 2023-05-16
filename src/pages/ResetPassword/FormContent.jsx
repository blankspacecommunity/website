import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import ToastModal from "../../components/ToastModal/ToastModal";
import parseError from "../../helpers/parseError";

import { resetPassword } from "../../scripts/firebase/authentication/authentication";

export default function FormContent() {
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    code: "",
    message: "",
    delay: 0,
    position: "top-end",
  });

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let toastData = {};

    if (!(email.includes("@bsemail.web.app") || email.includes(".ajce.in"))) {
      toastData = parseError("client/not-college-mail");

      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
      return;
    }

    const authResponse = await resetPassword(email);

    if (authResponse.error) {
      toastData = parseError(authResponse.error.code);

      setToastContent(toastData);
      setShowToast(true);
      setIsLoading(false);
    } else {
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
