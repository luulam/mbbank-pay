import React from "react";
import Styled from "./header-bar.style";
import { TextCommon, ImageCommon } from "components";
import images from "assets/images";
const headerBar = (props) => {
  return (
    <Styled>
      <ImageCommon className="img" src={images.logo} />
      <TextCommon>Cổng thanh toán trực tuyến MB Bank</TextCommon>
    </Styled>
  );
};

export default headerBar;
