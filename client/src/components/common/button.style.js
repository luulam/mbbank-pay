import styled from "styled-components";
import { colors, spacing } from "theme";

const Styles = styled.button`
  display: flex;
  background: ${colors.Primary};
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 200px;
  /* padding-left: ${spacing[7]};
  padding-right: ${spacing[7]}; */
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.White};
  outline: none;
  border: none;
  font-family: "AvertaStdCY-Bold";
`;

export default Styles;
