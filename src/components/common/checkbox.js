import React, { useState } from "react";
import Styled from "./checkbox.style";

const CheckBoxCommon = ({ children, title, select = false, ...restProps }) => {
    const [isSelect, setIsSelect] = useState(select)

    const _onClick = () => {
        setIsSelect(!isSelect)
    }
    return <Styled {...restProps} onClick={_onClick}>
        <div className={isSelect ? "dot img-select" : "dot"} />
        <span>{title}</span>
    </Styled>;
};

export default CheckBoxCommon;
