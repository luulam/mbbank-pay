import React from "react";
import Styled from "./title.style";

const TitleCommon = ({ children, ...restProps }) => {
  return (
    <Styled level={2} {...restProps}>
      {children}
    </Styled>
  );
};

export default TitleCommon;
