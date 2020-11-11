import styled from "styled-components";
import TitleCommon from "../common/title";
import TextCommon from "../common/text";
import InputCommon from "../common/input";
import ButtonCommon from "../common/button";
import ViewCommon from "../common/view";
import Modal from "../common/modal";
import { spacing, colors } from "theme";

export const ContainerModal = styled(Modal)``;

export const Card = styled(ViewCommon)`
  background: white;
  border-radius: 6px;
  padding: ${spacing[3]};
`;

export const Title = styled(TitleCommon)`
  font-size: 20px;
`;

export const SubTitle = styled(TextCommon)`
  margin-bottom: ${spacing[2]};
  margin-top: ${spacing[1]};
  a {
    color: ${colors.Primary};
    font-weight: bold;
  }
`;

export const CtnInput = styled(ViewCommon)`
  margin-top: ${spacing[3]};
`;

export const Input = styled(InputCommon)`
  margin-top: ${spacing[2]};
  margin-bottom: ${spacing[6]};
`;

export const TitleInput = styled(TitleCommon)`
  font-size: 1.1em;
  color: #333333;
  margin-bottom: ${spacing[0]};
`;

export const NotiError = styled(TextCommon)`
  color: red;
  text-align: center;
  font-size: 0.8em;
  margin-top: ${spacing[1]};
  margin-bottom: ${spacing[1]};
`;

export const ImgQrCode = styled.img`
  width: 240px;
  height: 240px;
  align-self: center;
`;

export const TitleQr = styled.span`
  text-align: center;
`;
export const TextCountdown = styled.span`
  text-align: center;
`;

export const ButtonNext = styled(ButtonCommon)`
  width: 100%;
`;