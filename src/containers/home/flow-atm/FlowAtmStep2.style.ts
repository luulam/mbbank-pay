import styled from "styled-components";
import { mediaScreen, spacing, fonts } from "theme";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* height: ${mediaScreen.sm}; */
  padding: ${spacing[5]};
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

      span {
        flex: 1;
      }

      div {
        flex: 2;
        flex-direction: row;

        div {
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
  .ctn-change-number {
    align-self: flex-end;
    margin-right: 10px;
    margin-top: 10px;
  }
  .ctn-policy {
    margin-right: 10px;
    margin-top: 20px;
  }

  .ctn-navigate {
    flex-direction: row;
    align-items: center;
    margin-top: ${spacing[5]};

    .back {
      flex: 1;
      font-size: ${fonts.size[5]};
    }

    img {
      width: 24px;
    }
  }

  .btn-submit {
    /* align-self: center; */
  }
`;

export default Styles;
