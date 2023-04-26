import React from "react";

export default function BackgroundImage() {
  return (
    <div
      className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
      style={{
        backgroundImage: "url(src/assets/img/account/signin-bg.jpg)",
      }}
    />
  );
}
