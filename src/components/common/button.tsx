import React, { Component } from "react";
import { Button } from "antd";
import Styled from "./button.style";

const ButtonCommon = (props: any) => {
  return <Button {...props}></Button>;
};

export default Styled(ButtonCommon);
