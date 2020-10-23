import React from "react";
import Styled from "./tab.style";

const Tab = (props: any) => {
  const { current = 0, children } = props;
  const childrenWithProps = React.Children.map(children, (child, index) => {
    const hidden = !(current === index);
    if (React.isValidElement(child)) {
      return <div hidden={hidden}>{React.cloneElement(child, props)}</div>;
    }
    return child;
  });
  return <Styled {...props}>{childrenWithProps}</Styled>;
};

export default Tab;
