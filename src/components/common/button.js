import React from "react";
import Styled from "./button.style";

const ButtonCommon = ({ children, ...restProps }) => {
  return <Styled {...restProps}>{children}</Styled>;
};

export default ButtonCommon;
