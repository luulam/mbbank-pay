import React from "react";
import Styled from "./input.style";

const InputCommon = (props) => {
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
      <input
        disabled={disabled}
        className={`${msgError ? "err" : ""}`}
        placeholder={placeholder}
        onChange={(e) => onChangeValue && onChangeValue(e.target.value)}
      >
        {children}
      </input>
      {msgError ? <span>{msgError}</span> : null}
    </Styled>
  );
};

export default InputCommon;
