import styled from "styled-components";
import { colors, spacing } from "theme";
import { Button } from "antd";

const Styles = styled(Button)`
  display: flex;
  background: ${colors.Primary};
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-left: ${spacing[7]};
  padding-right: ${spacing[7]};

  span {
    font-size: 14px;
    text-transform: uppercase;
    color: ${colors.White};
    font-weight: 500;
  }
`;

export default Styles;
