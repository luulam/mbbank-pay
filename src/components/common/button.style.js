import styled from "styled-components";
import { colors, spacing } from "theme";

const Styles = styled.button`
  display: flex;
  background: ${colors.Primary};
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-left: ${spacing[7]};
  padding-right: ${spacing[7]};
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.White};
  font-weight: bold;
  outline: none;
  border: none;
`;

export default Styles;
