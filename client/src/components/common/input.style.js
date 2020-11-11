import styled from "styled-components";
import { colors } from "theme";
import { spacing } from "theme/index";

const Styles = styled.div`
  display:flex;
  flex-direction: column;

  input {
    border-radius: 8px;
    background: #f2f2f2;
    border-width: 0px;
    height: 48px;
    align-items:center;
    padding-left: ${spacing[2]};
    padding-right: ${spacing[2]};
    font-size: 16px;
  }

  .err {
    border-width: 1px;
    border-color: ${colors.Red};
  }
`;

export default Styles;
