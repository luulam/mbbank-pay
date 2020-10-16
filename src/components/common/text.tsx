import React from "react";
import Styled from "./view.style";
import { Typography } from "antd";
const { Text } = Typography;

const TextCommon = (props: any) => {
  return <Text {...props}></Text>;
};

export default Styled(TextCommon);
