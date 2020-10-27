import styled from "styled-components";
import { spacing, fonts } from "theme";

const Styles = styled.div`
  padding: ${spacing[5]};

  .ctn-title {
    display: flex;
    span {

    }
  }

  .ctn-form {
    .ctn-row {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      align-items: center;
      flex-grow:3;

      span {
        flex: 1;
      }
    }

    .flex1 {
      flex:1;
    }

    .flex2{
      flex:2;
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
  }
`;

export default Styles;
