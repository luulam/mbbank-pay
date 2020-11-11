import styled from "styled-components";
import TitleCommon from "../common/title";
import TextCommon from "../common/text";
import InputCommon from "../common/input";
import ButtonCommon from "../common/button";
import ViewCommon from "../common/view";
import Modal from "../common/modal";
import { spacing, colors } from "theme";
import { metric } from "theme/index";

export const ContainerModal = styled(Modal)``;

export const Card = styled(ViewCommon)`
  background: white;
  border-radius: ${metric.radius};
  padding: ${spacing[4]};
  padding-bottom: ${spacing[5]};

  .otp-input {
    margin-top: 48px;
    margin-bottom: 12px;
  }
`;

export const Title = styled(TitleCommon)`
  font-size: 24px;
`;

export const SubTitle = styled(TextCommon)`
  margin-bottom: ${spacing[2]};
  margin-top: ${spacing[1]};
  a {
    color: ${colors.Primary};
    /* font-weight: bold; */
  }
  a {
    color: #141ed2;
    text-decoration: underline;
  }
`;

export const TextTime = styled(TextCommon)`
  margin-top: ${spacing[5]};
  margin-bottom: ${spacing[6]};
  text-align: center;
`;

export const BtnSubmit = styled(ButtonCommon)`
  width: 100%;
`;
