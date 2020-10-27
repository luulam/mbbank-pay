import styled from "styled-components";
import Title from "../common/title";
import Text from "../common/text";
import Input from "../common/input";
import Button from "../common/button";
import View from "../common/view";
import Modal from "@material-ui/core/Modal";
import { spacing } from "theme";

export const ContainerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(View)`
  background: white;
  border-radius: 6px;
  padding: ${spacing[3]};
`;
export const TitleModal = styled(Title)``;
export const SubTitle = styled(Text)`
  margin-bottom: ${spacing[4]};
`;

export const CtnInput = styled.div``;
export const InputModal = styled(Input)``;
export const TitleInput = styled(Text)`
  color: #333333;
`;
export const ButtonNext = styled(Button)`
  width: 100%;
`;
export const ButtonBack = styled(Button)`
  margin-top: 6px;
  background: #cccccc;
  width: 100%;
`;
