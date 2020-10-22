import React from "react";
import Styled from "./input.style";
import { Input } from "antd";

const InputCommon = (props: any) => {
  const {
    children,
    msgError,
    placeholder,
    onChangeValue,
    style,
    disabled,
  } = props;
  return (
    <Styled style={style}>
      <Input
        disabled={disabled}
        className={`${msgError ? "err" : ""}`}
        placeholder={placeholder}
        onChange={(e) => onChangeValue && onChangeValue(e.target.value)}
      >
        {children}
      </Input>
      {msgError ? <span>{msgError}</span> : null}
    </Styled>
  );
};

export default InputCommon;
