import React from "react";
import Styled from "./view.style";

const ViewCommon = ({ children, ...restProps }) => {
  return <Styled {...restProps}>{children}</Styled>;
};

export default ViewCommon;
