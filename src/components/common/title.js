import React from "react";
import Styled from "./title.style";

const TitleCommon = ({ children, ...restProps }) => {
  return (
    <Styled {...restProps}>
      {children}
    </Styled>
  );
};

export default TitleCommon;
