import styled from "styled-components";
import { mediaScreen, spacing, fonts } from "theme";

const Styles = styled.div`
  padding-left: ${spacing[5]};
  padding-right: ${spacing[5]};
  padding-bottom: ${spacing[5]};

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

      .text-left {
        flex:1;
      }

      .text-right {
        flex:2;
        text-align: right;
      }

      .text-blue {
        color: #2357ea;
      }

      .text-bold {  
        font-weight: bold;
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
  }
`;

export default Styles;
