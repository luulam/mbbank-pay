import styled from "styled-components";
import { spacing, colors } from "theme";
import { TextCommon, ViewCommon } from "components";

export const Container = styled(ViewCommon)`
  margin-top: ${spacing[6]};
  margin-bottom: ${spacing[5]};
  margin-left: ${spacing[3]};
  margin-right: ${spacing[3]};
`;

export const LineDot = styled.div`
  flex-grow: 1;
  border-bottom: 1px dashed ${(props) => props.enable ? colors.Primary : "gray"};
  margin: 5px;
`;

export const CtnImage = styled(ViewCommon)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8%;
  margin-right: 8%;
`;

export const Image = styled.img`
  width: 38px;
  height: 38px;
`;

export const CtnName = styled(ViewCommon)`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const NameStep = styled(TextCommon)`
  flex: 1;
  margin-top: ${spacing[0]};
  color: #333333;
  font-size: 14px;
  font-family: ${(props) =>
    props.enable ? "AvertaStdCY-Semibold" : "AvertaStdCY-Regular"};
`;
