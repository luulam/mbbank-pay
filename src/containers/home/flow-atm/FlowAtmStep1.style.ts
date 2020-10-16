import styled from "styled-components";
import { mediaScreen } from "theme";

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: ${mediaScreen.sm};

  .ctn-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .ctn-select-box {
  }
`;
