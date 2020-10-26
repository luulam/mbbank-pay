import React from "react";
import Styled from "./text.style";

const TextCommon = (props) => {
  const { children } = props;
  return <Styled {...props}>{children}</Styled>;
};

export default TextCommon;
