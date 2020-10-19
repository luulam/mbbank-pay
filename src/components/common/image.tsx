import React from "react";
import PropTypes from "prop-types";
import Styled from "./image.style";

const ImageCommon = (props: any) => {
  const {} = props;
  // const onError = (event: any) => {
  //   return (event.target.src = srcDefault);
  // };

  return <Styled {...props}></Styled>;
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

export default ImageCommon;
