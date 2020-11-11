import React from "react";
import { Container, Item } from "./select.style";

const SelectCommon = ({ data, select, value, onChange, ...restProps }) => {
  return (
    <Container select={select} value={value} onChange={onChange}>
      {data.map((value, index) => {
        return (
          <Item value={value} key={index}>
            {value}
          </Item>
        );
      })}
    </Container>
  );
};

export default SelectCommon;
