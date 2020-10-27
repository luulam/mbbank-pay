import React, { useState } from "react";
import Styled from "./atm-step-1.style";
import {
  ButtonCommon,
  TextCommon,
  ViewCommon,
  TitleCommon,
  ImageCommon,
  InputCommon,
} from "components";
import images from "assets/images";

const FlowAtmStep1 = ({ onNext, goBack }) => {
  const [msgErrorNumberCard, setMsgErrorNumberCard] = useState("");

  const _onNextScreen = () => {
    onNext && onNext(1);
  };

  const onChangeNumberCard = (value) => {
    setMsgErrorNumberCard("");
  };

  return (
    <Styled>
      <ViewCommon className="ctn-title">
        <TitleCommon level={4}>Thanh toán qua thẻ ATM</TitleCommon>
        <TextCommon>
          {
            "Vui lòng điều thông tin thẻ ngân hàng của bạn vào các trường để tiếp tục thanh toán"
          }
        </TextCommon>
      </ViewCommon>
      <ViewCommon className={"ctn-form"}>
        <ViewCommon className={"ctn-row"}>
          <TextCommon>Số thẻ</TextCommon>
          <InputCommon
            style={{ flex: 2 }}
            placeholder="Nhập số thẻ"
            msgError={msgErrorNumberCard}
            onChangeValue={onChangeNumberCard}
          />
        </ViewCommon>

        <ViewCommon className={"ctn-row"}>
          <TextCommon>Ngày phát hành:</TextCommon>
          <InputCommon style={{ flex: 2 }} placeholder="DD/MM/YYYY" />
        </ViewCommon>
        <ViewCommon className={"ctn-row"}>
          <TextCommon>Tên chủ thẻ:</TextCommon>
          <InputCommon style={{ flex: 2 }} placeholder="Nhập tên không đấu" />
        </ViewCommon>
        <ViewCommon className={"ctn-row"}>
          <TextCommon>Mã xác nhận:</TextCommon>
          <InputCommon style={{ flex: 2 }} placeholder="Nhập số thẻ" />
        </ViewCommon>

        <ViewCommon className={"ctn-change-number"}>
          <TextCommon>Đổi mã</TextCommon>
        </ViewCommon>

        <ViewCommon className={"ctn-policy"}>
          <TextCommon>Điều khoản & điều kiện sử dụng dịch vụ của MB</TextCommon>
        </ViewCommon>
      </ViewCommon>

      <ViewCommon className={"ctn-navigate"}>
        <ImageCommon src={images.icBack} onClick={goBack} />
        <TextCommon className="back" onClick={goBack}>
          Quay về
        </TextCommon>

        <ButtonCommon
          className="btn-submit"
          onClick={() => {
            _onNextScreen();
          }}
        >
          Tiếp tục
        </ButtonCommon>
      </ViewCommon>
    </Styled>
  );
};

export default FlowAtmStep1;
