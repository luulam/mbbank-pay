import styled from "styled-components";
import { spacing, fonts } from "theme";
import { TitleCommon } from "components";
import {
  ViewCommon,
  TextCommon,
  InputCommon,
  ImageCommon,
} from "components/index";

export const Container = styled(ViewCommon)`
  padding: ${spacing[5]};
`;

export const Title = styled(TitleCommon)``;

export const SubTitle = styled(TextCommon)`
  margin-bottom: 16px;
`;

export const CtnRowForm = styled(ViewCommon)`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  flex-grow: 3;
`;

export const TitleRow = styled(TextCommon)`
  flex: 1;
  color: #16161c;
`;

export const InputRow = styled(InputCommon)``;

export const CtnPolicy = styled(ViewCommon)`
  margin-right: 16px;
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
`;

export const ImagePolicy = styled(ImageCommon)`
  width: 22px;
  height: 22px;
  margin-left: 6px;
`;
