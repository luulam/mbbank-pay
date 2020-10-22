import styled from "styled-components";
import { spacing } from "theme";

const Styles = styled.div`
  display: flex;
  /* align-items: center; */
  margin-top: ${spacing[6]};
  margin-bottom: ${spacing[5]};
  margin-left: ${spacing[3]};
  margin-right: ${spacing[3]};
  flex-direction: column;

  .ctn-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${spacing[4]};
    margin-right: ${spacing[4]};

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
  }
  .ctn-title {
    /* flex: 1; */

    p {
      /* text-align: center; */
    }
  }
`;

export default Styles;
