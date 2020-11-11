import React, { useState } from "react";
import { Container, Icon } from "./checkbox.style";
import images from "assets/images";
const CheckBoxCommon = ({ children, title, select = false, ...restProps }) => {
  const [isSelect, setIsSelect] = useState(select);

  const _onClick = () => {
    setIsSelect(!isSelect);
  };
  return (
    <Container {...restProps} onClick={_onClick}>
      <Icon src={isSelect ? images.cpCheck : images.cpUnCheck} />
      <span>{title}</span>
    </Container>
  );
};

export default CheckBoxCommon;
