import React from "react";
import Styled from "./input.style";

const InputCommon = ({
  children,
  msgError,
  placeholder,
  onChangeValue,
  style,
  disabled,
  ...restProps }) => {

  return (
    <Styled style={style} {...restProps}>
      <input
        disabled={disabled}
        className={`${msgError ? "err" : ""}`}
        placeholder={placeholder}
        onChange={(e) => onChangeValue && onChangeValue(e.target.value)}
      />
      {msgError ? <span>{msgError}</span> : null}
    </Styled>
  );
};

export default InputCommon;
