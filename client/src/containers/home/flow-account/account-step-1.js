import React, { useState } from "react";
import {
  ButtonCommon,
  TextCommon,
  ViewCommon,
  TitleCommon,
  ImageCommon,
  CheckBoxCommon,
} from "components";
import {
  Container,
  Title,
  SubTitle,
  CtnList,
  CtnRow,
  CtnNavigation,
  SelectTypeVerify,
  TitleTypeVerify,
} from "./account-step-1.style";
import images from "assets/images";

const AccountStep1 = ({ onNext, goBack }) => {
  const [typeVerify, setTypeVerify] = useState();
  const _onNextScreen = () => {
    onNext && onNext(1);
  };

  const listForm = [
    {
      title: "Mã tham chiếu",
      value: "10929382734837",
      classRight: "text-blue",
    },
    { title: "Loại giao dịch:", value: "Gia hạn thẻ BHYT" },
    { title: "Từ số thẻ:", value: "8787283789781790", classRight: "text-bold" },
    {
      title: "Tới:",
      value: "Bảo hiểm Xã hội quậnn Thanh Xuân ngân hàng Quân đội 002011029288",
    },
    { title: "Số tiền TT dịch vụ", value: "250,000" },
    {
      title: "Phí giao dịch (bao gồm VAT):",
      value: "Miễn phí",
      classRight: "text-blue",
    },
    { title: "Tổng tiền:", value: "250,000", classRight: "text-blue" },
    {
      title: "Số tiền bằng chữ:",
      value: "Hai trăm năm mươi nghìn Việt Nam đồng",
    },
    {
      title: "Nội dung",
      value: "Giao dịch gia hạn thẻ BHYT mã thẻ: GD182887183783",
    },
    {
      title: "Hình thức thanh toán",
      value: "Trong MB",
      classRight: "text-bold",
    },
  ];

  const listTypeVerify = [
    "NGUYEN THI THU HA /10782747485374 /10,125,003 VND",
    "NGUYEN THI THU HA /10782747485374 /10,125,003 VND",
    "NGUYEN THI THU HA /10782747485374 /10,125,003 VND",
    "NGUYEN THI THU HA /10782747485374 /10,125,003 VND",
    "NGUYEN THI THU HA /10782747485374 /10,125,003 VND",
  ];
  const _onChangeTypeVerify = (value) => {
    setTypeVerify(value.target.value);
  };
  return (
    <Container>
      <Title>Thông tin thanh toán</Title>
      <SubTitle>
        Vui lòng kiểm tra thông tin của bạn trước khi tiến hành thanh toán dich
        vụ
      </SubTitle>
      <CtnList>
        {listForm.map(({ title, value, classRight }, index) => {
          return (
            <CtnRow className="ctn-row" key={index}>
              <TextCommon className="text-left">{title}</TextCommon>
              <TextCommon className={`text-right ${classRight}`}>
                {value}
              </TextCommon>
            </CtnRow>
          );
        })}
      </CtnList>

      <TitleTypeVerify>Tài khoản thanh toán</TitleTypeVerify>

      <SelectTypeVerify
        data={listTypeVerify}
        value={typeVerify}
        onChange={_onChangeTypeVerify}
      />

      <CtnNavigation>
        <ImageCommon src={images.icBack} onClick={goBack} />
        <TextCommon onClick={goBack}>Quay về</TextCommon>

        <ButtonCommon
          onClick={() => {
            _onNextScreen();
          }}
        >
          Xác nhận
        </ButtonCommon>
      </CtnNavigation>
    </Container>
  );
};

export default AccountStep1;
