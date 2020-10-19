import styled from "styled-components";
import { mediaScreen, spacing } from "theme";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${mediaScreen.sm};
  padding: ${spacing[4]};
  padding-top: ${spacing[6]};
  padding-bottom: ${spacing[6]};

  .ctn-title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      text-align: center;
      white-space: pre-line;
    }
  }

  .ctn-select-box {
    display: flex;

    flex-direction: row;
    justify-content: space-around;
  }

  .ctn-item {
    align-items: center;
    justify-content: center;
    position: relative;
    width: 160px;
    height: 160px;
    display: flex;
    border-radius: 6px;
    border: 1px solid #bdbdbd;
    background: #f6f6f6;

    span {
      margin-top: ${spacing[2]};
      white-space: pre-line;
      text-align: center;
    }
    .img-type {
      height: 50px;
      margin-top: ${spacing[4]};
    }

    .img-select {
      width: 24px;
      position: absolute;
      right: ${spacing[2]};
      top: ${spacing[2]};
    }
  }

  .ctn-item-select {
    border: 1.5px solid #076bf3;
    background: #ffffff;

    span {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .btn-submit {
    align-self: center;
  }
`;

export default Styles;
