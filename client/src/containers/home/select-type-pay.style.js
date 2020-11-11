import styled from "styled-components";
import { mediaScreen, spacing, colors } from "theme";
import { ViewCommon, TitleCommon, TextCommon, ButtonCommon } from "components";

export const Container = styled(ViewCommon)`
  flex-direction: column;
  justify-content: space-between;
  /* height: ${mediaScreen.sm}; */
  padding: ${spacing[1]};
  padding-top: ${spacing[5]};
  padding-bottom: ${spacing[6]};
`;

export const Title = styled(TitleCommon)`
  text-align: center;
  font-size: 36px;
`;

export const SubTitle = styled(TextCommon)`
  text-align: center;
  margin-bottom: ${spacing[2]};
  margin-top: ${spacing[1]};
  a {
    color: ${colors.Primary};
    font-weight: bold;
  }
`;

export const CtnListType = styled(ViewCommon)`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${spacing[6]};
  margin-bottom: ${spacing[7]};
`;

export const CtnItemType = styled(ViewCommon)`
  align-items: center;
  justify-content: center;
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 16px;
  box-shadow: ${(props) =>
    props.isSelect ? "2px 2px 10px 0 rgba(0, 0, 0, 0.1)" : ""};
  border: ${(props) =>
    props.isSelect ? "1.5px solid #076bf3" : "1px solid #bdbdbd"};
  background: ${(props) => (props.isSelect ? "#fff" : "#f6f6f6")};

  span {
    margin-top: ${spacing[2]};
    white-space: pre-line;
    text-align: center;
    color: ${(props) => (props.isSelect ? "#333333" : "#646464")};
    font-family: ${(props) =>
      props.isSelect ? "AvertaStdCY-Semibold" : "AvertaStdCY-Regular"};
  }

  .img-type {
    height: 48px;
    margin-top: ${spacing[4]};
  }

  .img-select {
    width: 24px;
    position: absolute;
    right: ${spacing[0]};
    top: ${spacing[0]};
  }
`;

export const ButtonSubmit = styled(ButtonCommon)`
  width: 200px;
  align-self: center;
`;
