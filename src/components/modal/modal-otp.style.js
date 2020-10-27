import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { spacing } from "theme";

const Styles = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .ctn {
    background: white;
    border-radius: 6px;
    /* padding: ${spacing[5]}; */
    padding-top: ${spacing[2]};
    padding-bottom: ${spacing[4]};
    padding-left: ${spacing[4]};
    padding-right: ${spacing[4]};
    display: flex;
    flex-direction: column;
    margin-left: ${spacing[2]};
    margin-right: ${spacing[2]};

    a {
      color: #141ed2;
      text-decoration: underline;
    }
  }

  .txt-time {
    margin-top: ${spacing[5]};
    margin-bottom: ${spacing[6]};
    text-align: center;
  }

  .btn-submit {
    width: 100%;
  }

  .otp-input {
    margin-top: 48px;
    margin-bottom: 12px;
  }
`;

export default Styles;
