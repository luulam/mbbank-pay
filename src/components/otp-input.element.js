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
`;

export const Line = styled.span`
  flex: 1;
  align-self: center;
  margin-left: 10px;
`;

export const ItemInput = styled.input`
  border: 1px solid #2357ea;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 42px;
  font-size: 26px;
  text-align: center;
  border-radius: 4px;
`;
