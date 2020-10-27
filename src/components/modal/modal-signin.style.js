import styled from "styled-components";
import TitleCommon from "../common/title";
import TextCommon from "../common/text";
import InputCommon from "../common/input";
import ButtonCommon from "../common/button";
import ViewCommon from "../common/view";
import Modal from "@material-ui/core/Modal";
import { spacing } from "theme";

export const ContainerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(ViewCommon)`
  background: white;
  border-radius: 6px;
  padding: ${spacing[3]};
`;
export const Title = styled(TitleCommon)``;
export const SubTitle = styled(TextCommon)`
  margin-bottom: ${spacing[4]};
`;

export const CtnInput = styled.div``;
export const Input = styled(InputCommon)``;
export const TitleInput = styled(TextCommon)`
  color: #333333;
`;
export const ButtonNext = styled(ButtonCommon)`
  width: 100%;
`;
export const ButtonBack = styled(ButtonCommon)`
  margin-top: 6px;
  background: #cccccc;
  width: 100%;
`;
