import React from "react";
import Styled from "./title.style";

const TitleCommon = (props) => {
  const { children } = props;
  return (
    <Styled level={2} {...props}>
      {children}
    </Styled>
  );
};

export default TitleCommon;
