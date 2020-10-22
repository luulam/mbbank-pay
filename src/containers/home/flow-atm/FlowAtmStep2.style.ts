import styled from "styled-components";
import { mediaScreen, spacing } from "theme";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  height: ${mediaScreen.sm};
  padding: ${spacing[3]};
  /* padding-top: ${spacing[6]};
  padding-bottom: ${spacing[6]}; */

  .ctn-title {
    display: flex;
    /* align-items: flex-start; */
    /* align-items: center; */
    /* justify-content: center; */
    /* flex-direction: column; */

    span {
      /* text-align: center; */
      /* white-space: pre-line; */
    }
  }

  .ctn-form {
    .ctn-row {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      align-items: center;
    }

    .flex2 {
      flex: 2;
    }

    .flex1 {
      flex: 1;
    }
  }

  .btn-submit {
    align-self: center;
  }
`;

export default Styles;
