import styled from "styled-components";
import { spacing, fonts, colors } from "theme";

import {
  ViewCommon,
  TitleCommon,
  TextCommon,
  InputCommon,
  ButtonCommon,
  SelectCommon,
} from "components";

export const Container = styled(ViewCommon)`
  background: white;
  border-radius: 6px;
  padding: ${spacing[3]};
  padding-bottom: ${spacing[5]};
`;
export const Card = styled(ViewCommon)`
  background: white;
  border-radius: 6px;
  padding: ${spacing[3]};
`;
export const Title = styled(TitleCommon)``;

export const SubTitle = styled(TextCommon)`
  margin-bottom: ${spacing[2]};
  margin-top: ${spacing[1]};
  a {
    color: ${colors.Primary};
    font-weight: bold;
  }
`;
export const CtnList = styled(ViewCommon)``;

export const CtnRow = styled(ViewCommon)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;

  .span {
    flex: 1;
  }

  .text-right {
    flex: 2;
    text-align: right;
  }
  .text-blue {
    color: #2357ea;
  }

  .text-bold {
    font-weight: bold;
  }
`;
export const TitleTypeVerify = styled(TitleCommon)`
  border-top: 1px solid black;
  padding-top: 16px;
  margin-top: 16px;
  margin-bottom: 6px;
  font-size: 1.2em;
`;
export const SelectTypeVerify = styled(SelectCommon)``;

export const CtnNavigation = styled(ViewCommon)`
  flex-direction: row;
  align-items: center;
  margin-top: ${spacing[5]};

  span {
    flex: 1;
    font-size: ${fonts.size[5]};
  }

  img {
    width: 24px;
  }
`;
