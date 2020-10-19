import React from "react";
import Styled from "./button.style";

const ButtonCommon = (props: any) => {
  const { children } = props;
  return (
    <Styled type="primary" {...props}>
      {children}
    </Styled>
  );
};

export default ButtonCommon;
