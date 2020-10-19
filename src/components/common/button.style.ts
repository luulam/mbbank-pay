import styled from "styled-components";
import { colors, spacing } from "theme";
import { Button } from "antd";

const Styles = styled(Button)`
  display: flex;
  background: ${colors.Primary};
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding-left: ${spacing[6]};
  padding-right: ${spacing[6]};

  span {
    font-size: 14px;
    text-transform: uppercase;
    color: ${colors.White};
  }
`;

export default Styles;
