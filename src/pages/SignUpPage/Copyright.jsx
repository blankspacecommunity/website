import React from "react";

export default function Copyright() {
  return (
    <>
      <div className="w-100 align-self-end">
        <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
          &copy;{new Date().getFullYear()} BlankSpace - All rights reserved
        </p>
      </div>
    </>
  );
}
