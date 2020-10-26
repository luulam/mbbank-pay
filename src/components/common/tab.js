import React from "react";
import Styled from "./tab.style";

const Tab = ({ current = 0, children, ...restProps }) => {
  const childrenWithProps = React.Children.map(children, (child, index) => {
    const hidden = !(current === index);
    if (React.isValidElement(child)) {
      return <div hidden={hidden}>{React.cloneElement(child, restProps)}</div>;
    }
    return child;
  });
  return <Styled {...restProps}>{childrenWithProps}</Styled>;
};

export default Tab;
