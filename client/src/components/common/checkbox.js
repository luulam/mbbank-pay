import React, { useState } from "react";
import { Container, Icon } from "./checkbox.style";
import images from "assets/images";
const CheckBoxCommon = ({ children, title, defaultSelect = false, ...restProps }) => {
  const [isSelect, setIsSelect] = useState(defaultSelect);

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
