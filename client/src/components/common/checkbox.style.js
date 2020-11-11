import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  align-items: flex-start;

  .dot {
    height: 18px;
    width: 21px;
    border-radius: 50%;
    border: 2px solid gray;
    margin-right: 12px;
  }

  .img-select {
    background: black;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  margin-top: 4px;
`;
