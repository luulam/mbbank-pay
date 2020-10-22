import React from "react";
import Styled from "./button.style";

const ButtonCommon = (props: any) => {
  const { children } = props;
  return <Styled {...props}>{children}</Styled>;
};

export default ButtonCommon;
