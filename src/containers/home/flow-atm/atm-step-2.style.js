import styled from "styled-components";
import { spacing, fonts } from "theme";
import { ViewCommon, TitleCommon, TextCommon } from "components/index";

export const Constant = styled(ViewCommon)`
  padding-left: ${spacing[4]};
  padding-right: ${spacing[4]};
  padding-top: ${spacing[4]};
  padding-bottom: ${spacing[5]};


`;

export const Title = styled(TitleCommon)``;

export const SubTitle = styled(TextCommon)`
  margin-bottom: 16px;
`;

export const CtnForm = styled(ViewCommon)`
  margin-bottom: 14px;
`;

export const CtnRowForm = styled(ViewCommon)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;

  .text-left {
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
