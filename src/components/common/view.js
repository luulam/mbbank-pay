import React from "react";
import Styled from "./view.style";

const ViewCommon = (props) => {
  const { children } = props;
  return <Styled {...props}>{children}</Styled>;
};

export default ViewCommon;