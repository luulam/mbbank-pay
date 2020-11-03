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

export const CtnChangeCode = styled(ViewCommon)`
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  margin-top: ${spacing[1]};
`;

export const TitleChangeCode = styled.span`
  font-size: 12px;
`;

export const ImgChangeCode = styled.img`
  margin-left: ${spacing[1]};
  width: 12px;
  height: 12px;
`;
