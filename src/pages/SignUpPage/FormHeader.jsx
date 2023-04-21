import React from "react";

export default function FormHeader() {
  return (
    <div>
      {" "}
      <h1 className="text-center text-xl-start">Create Account</h1>
      <p className="text-center text-xl-start pb-3 mb-3">
        Already have an account? <a href="account-signin.html">Sign in here.</a>
      </p>
    </div>
  );
}
