import React from "react";
import Styled from "./text.style";

const TextCommon = ({ children, ...restProps }) => {
  return <Styled {...restProps}>{children}</Styled>;
};

export default TextCommon;
