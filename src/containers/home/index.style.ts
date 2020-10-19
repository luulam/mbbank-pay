import styled from "styled-components";
import { mediaScreen } from "theme";

const Styles = styled.div`
  display: flex;
  flex: 1;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form {
    align-items: "center";
    align-self: "center";
    width: ${mediaScreen.sm};
  }

  .form-input {
    background: white;
    width: ${mediaScreen.sm};
    height: ${mediaScreen.sm};
    border-radius: 6px;
    /* box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3); */
  }
`;

export default Styles;
