import styled from "styled-components";
import { spacing, colors } from "theme";
import { TextCommon, ViewCommon } from "components";
import { ButtonCommon } from "components/index";

export const Container = styled(ViewCommon)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${spacing[5]};
`;

export const CtnBack = styled(ViewCommon)`
  flex-direction: row;
  align-items: center;
`;
export const ImgBack = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 6px;
`;

export const TitleBtnBack = styled(TextCommon)`
  font-size: 16px;
  color: #828282;
`;

export const BtnSubmit = styled(ButtonCommon)``;
