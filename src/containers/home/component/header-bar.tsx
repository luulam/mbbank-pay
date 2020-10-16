import React from "react";
import Styled from "./header-bar.style";
import { Typography } from "antd";
const { Text } = Typography;

function headerBar() {
  return (
    <Styled>
      <img className="img" />
      <Text>Cổng thanh toán trực tuyến MB Bank</Text>
    </Styled>
  );
}

export default headerBar;
