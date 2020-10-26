import React from "react";
import Styled from "./header-bar.style";
import { Text } from "components";
import images from "assets/images";
import Image from 'components/common/image'
const headerBar = (props) => {
  return (
    <Styled>
      <Image className="img" src={images.logo} />
      <Text>Cổng thanh toán trực tuyến MB Bank</Text>
    </Styled>
  );
};

export default headerBar;
