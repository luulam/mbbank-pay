import React, { Component } from "react";
import PropTypes from "prop-types";
import Styled from "./image.style";

const ImageCommon = ({
  className,
  src,
  srcDefault,
  alt,
  style,
  styleWrap,
}: any) => {
  const onError = (event: any) => {
    return (event.target.src = srcDefault);
  };

  return (
    <img onError={onError} src={src || srcDefault} alt={alt} style={style} />
  );
};

ImageCommon.defaultProps = {
  className: "wrap-image",
  alt: "",
};

ImageCommon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  srcDefault: PropTypes.string,
};

export default Styled(ImageCommon);
