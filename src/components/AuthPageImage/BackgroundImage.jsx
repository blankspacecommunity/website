import React from "react";
import PropTypes from "prop-types";

export default function BackgroundImage({ imageUrl }) {
  return (
    <div
      className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  );
}

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
