import styled from "styled-components";
import { colors, spacing } from "theme";

const Styles = styled.div`
  display:flex;
  flex-direction:row;
  margin-top:12px;
  align-items:center;

  .dot {
    height: 18px;
    width: 21px;
    border-radius: 50%;
    border: 2px solid gray;
    margin-right:12px;
    
  }

  .img-select {
    background: black;
  }
`;

export default Styles;
