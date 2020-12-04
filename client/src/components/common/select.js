import React from "react";
import { Container, Item } from "./select.style";

const SelectCommon = ({ data, select, value, onChange, ...restProps }) => {
  return (
    <Container select={select} value={value} onChange={(ref) => onChange(ref.target.value, ref.target.key)}>
      {data.map((value, index) => {
        return (
          <Item value={value.value} key={index}>{value.value}</Item>
        );
      })}
    </Container>
  );
};

export default SelectCommon;
