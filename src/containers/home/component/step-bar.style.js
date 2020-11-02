import styled from "styled-components";
import { spacing } from "theme";
import { TextCommon, ViewCommon } from "components";
export const Container = styled(ViewCommon)`
  margin-top: ${spacing[6]};
  margin-bottom: ${spacing[5]};
  margin-left: ${spacing[3]};
  margin-right: ${spacing[3]};

  .ctn-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${spacing[6]};
    margin-right: ${spacing[6]};

    img {
      width: 43px;
      height: 43px;
    }
  }

  .ctn-step-line {
    flex-grow: 1;
    border-bottom: 2px dotted black;
    margin: 5px;
  }

  .ctn-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }
  .ctn-title {
    /* flex: 1; */

    p {
      /* text-align: center; */
    }
  }
`;

export const NameStep = styled(TextCommon)`
  margin-top: ${spacing[0]};
  color: #333333;
  font-family: ${(props) =>
    props.enable ? "AvertaStdCY-Semibold" : "AvertaStdCY-Regular"};
`;
