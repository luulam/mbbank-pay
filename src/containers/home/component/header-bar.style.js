import styled from "styled-components";
import { fonts } from "theme";

export default styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 76px;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  img {
    height: 32px;
  }
  span {
    font-size: ${fonts.size[4]};
    font-family: AvertaStdCY-Semibold;
    color: #333333;
  }
`;
