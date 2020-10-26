import styled from "styled-components";
import { colors } from "theme";

const Styles = styled.div`
  display:flex;
  flex-direction: column;

  input {
    border-radius: 8px;
    background: #f2f2f2;
    border-width: 0px;
    height: 52px;
    align-items:center;
    padding-left: 12px;
    padding-right: 12px;
  }

  .err {
    border-width: 1px;
    border-color: ${colors.Red};
  }
`;

export default Styles;
