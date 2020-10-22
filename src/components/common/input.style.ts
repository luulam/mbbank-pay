import styled from "styled-components";
import { colors, spacing } from "theme";

const Styles = styled.div`
  input {
    border-radius: 8px;
    background: #f2f2f2;
    border-width: 0px;
    padding-top: 10px;
    /* height: 52px; */
    padding-bottom: 10px;
  }

  .err {
    border-width: 1px;
    border-color: ${colors.Red};
  }

  span {
    color: ${colors.Red};
  }
`;

export default Styles;
