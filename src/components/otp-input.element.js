import styled from "styled-components";
import { spacing } from "theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CtnItemInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: red;
`;

export const Line = styled.span`
  flex: 1;
  align-self: center;
  background: red;
`;

export const ItemInput = styled.input`
  border: 1px solid gray;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  font-size: 26px;
  text-align: center;
`;
