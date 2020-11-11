import styled from "styled-components";

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

export const Line = styled.div`
  align-self: center;
  width: 8px;
  height: 1px;
  background: #2357ea;
`;

export const ItemInput = styled.input`
  border: 1px solid #2357ea;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 48px;
  font-size: 16px;
  font-family: AvertaStdCY-Semibold;
  text-align: center;
  border-radius: 4px;
`;
