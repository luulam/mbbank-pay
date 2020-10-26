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
    padding: ${spacing[5]};
    display: flex;
    flex-direction: column;
    margin-left: ${spacing[2]};
    margin-right: ${spacing[2]};
  }

  .txt-time {
    margin-top: ${spacing[5]};
    margin-bottom: ${spacing[5]};
  }

  .btn-submit {
    width: 100%;
  }
`;

export default Styles;
