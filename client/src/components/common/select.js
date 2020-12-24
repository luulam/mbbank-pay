import React from "react";
import { Container, Item } from "./select.style";
import _ from 'lodash'
const SelectCommon = ({ data, select, value, onChange, ...restProps }) => {
  return (
    <Container select={select} value={value} onChange={(ref) => {
      onChange(ref.target.value, _.findIndex(data, { "value": ref.target.value }))
    }}>
      {data.map((value, index) => {
        return (
          <Item value={value.value} key={index}>{value.value}</Item>
        );
      })}
    </Container>
  );
};

export default SelectCommon;
