import React from "react";
import Styled from "./input.style";

const InputCommon = (props: any) => {
  const { children } = props;
  return <Styled {...props}>{children}</Styled>;
};

export default InputCommon;
