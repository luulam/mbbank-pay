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

export const CtnCode = styled(ViewCommon)`
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Input = styled(InputCommon)`
  flex: 1;
`;

export const ImageCode = styled.img``;
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

export const Loading = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
