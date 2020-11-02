import React, { useState } from "react";
import {
  Container,
  Title,
  SubTitle,
  CtnRowForm,
  TitleRow,
  InputRow,
  CtnPolicy,
  ImagePolicy,
} from "./atm-step-1.style";
import {
  ButtonCommon,
  TextCommon,
  ViewCommon,
  TitleCommon,
  ImageCommon,
  ChangeCode,
} from "components";
import NavigationBottom from "../component/navigation-bottom";
import images from "assets/images";

const FlowAtmStep1 = ({ onNext, goBack }) => {
  const [msgErrorNumberCard, setMsgErrorNumberCard] = useState("");

  const onNextScreen = () => {
    onNext && onNext(1);
  };

  const onChangeNumberCard = (value) => {
    setMsgErrorNumberCard("");
  };

  return (
    <Container>
      <Title level={4}>Thanh toán qua thẻ ATM</Title>
      <SubTitle>
        {
          "Vui lòng điều thông tin thẻ ngân hàng của bạn vào các trường để tiếp tục thanh toán"
        }
      </SubTitle>
      <CtnRowForm className={"ctn-row"}>
        <TitleRow>Số thẻ</TitleRow>
        <InputRow
          style={{ flex: 2 }}
          placeholder="Nhập số thẻ"
          msgError={msgErrorNumberCard}
          onChangeValue={onChangeNumberCard}
        />
      </CtnRowForm>

      <CtnRowForm className={"ctn-row"}>
        <TitleRow>Ngày phát hành:</TitleRow>
        <InputRow style={{ flex: 2 }} placeholder="DD/MM/YYYY" />
      </CtnRowForm>
      <CtnRowForm className={"ctn-row"}>
        <TitleRow>Tên chủ thẻ:</TitleRow>
        <InputRow style={{ flex: 2 }} placeholder="Nhập tên không đấu" />
      </CtnRowForm>
      <CtnRowForm className={"ctn-row"}>
        <TitleRow>Mã xác nhận:</TitleRow>
        <ChangeCode />
      </CtnRowForm>

      <CtnPolicy className={"ctn-policy"}>
        <span>Điều khoản & điều kiện sử dụng dịch vụ của MB</span>
        <ImagePolicy src={images.icHelp} />
      </CtnPolicy>

      <NavigationBottom onBack={goBack} onNext={onNextScreen} />
    </Container>
  );
};

export default FlowAtmStep1;
