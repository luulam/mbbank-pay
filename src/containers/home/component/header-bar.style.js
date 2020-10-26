import styled from "styled-components";
import { fonts } from "theme";
export default styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 103px;
  width: 100%;
  align-items: center;
  justify-content: center;

  img {
    height: 40px;
  }
  span {
    font-size: ${fonts.size[5]};
  }
`;
