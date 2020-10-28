import styled from "styled-components";

import { spacing } from "theme";
import ViewCommon from "components/common/view";
import InputCommon from "./common/input";
import TitleCommon from "./common/title";

export const Container = styled(ViewCommon)`
  flex-direction: row;
`;

export const ContainerChangeCode = styled(ViewCommon)`
  margin-left: ${spacing[2]};
  width: 120px;
`;

export const CtnCode = styled(ViewCommon)``;

export const Input = styled(InputCommon)`
  flex: 1;
`;

export const InputShow = styled(InputCommon)`
  input {
    text-align: center;
    font-size: 1.4em;
    color: black;
    text-transform: uppercase;
  }
`;

export const TitleInput = styled(TitleCommon)`
  font-size: 1.1em;
  color: #333333;
`;

export const CtnChangeCode = styled(ViewCommon)`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-top: ${spacing[1]};
`;

export const TitleChangeCode = styled.span``;

export const ImgChangeCode = styled.img`
  margin-left: ${spacing[1]};
  width: 10px;
  height: 10px;
  background: gray;
`;
