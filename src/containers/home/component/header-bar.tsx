import React from "react";
import Styled from "./header-bar.style";
import { Text, Image } from "components";
import images from "assets/images";
const headerBar = (props: any) => {
  return (
    <Styled>
      <Image className="img" src={images.logo} />
      <Text>Cổng thanh toán trực tuyến MB Bank</Text>
    </Styled>
  );
};

export default headerBar;
