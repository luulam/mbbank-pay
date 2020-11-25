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
} from "./account-step-2.style";
import images from "assets/images";
import _ from "lodash";
const AccountStep2 = ({ onNext, goBack, data = {}, onChangeVerify }) => {
  const [typeVerify, setTypeVerify] = useState();
  const _onNextScreen = () => {
    onNext && onNext(2);
  };

  const {
    referenceCode,
    paymentType,
    bankReceiverCode,
    collectName,
    amount,
    feesAmount,
    totalAmount,
    totalAmountInWords,
    contentPayment,
  } = data;

  const listForm = [
    {
      title: "Mã tham chiếu",
      value: referenceCode,
      classRight: "text-blue",
    },
    { title: "Loại giao dịch:", value: collectName },
    { title: "Tới:", value: bankReceiverCode },
    { title: "Số tiền TT dịch vụ", value: amount },
    {
      title: "Phí giao dịch (bao gồm VAT):",
      value: feesAmount,
      classRight: "text-blue",
    },
    { title: "Tổng tiền:", value: totalAmount, classRight: "text-blue" },
    {
      title: "Số tiền bằng chữ:",
      value: totalAmountInWords,
    },
    {
      title: "Nội dung",
      value: contentPayment,
    },
    {
      itle: "Hình thức thanh toán",
      value: paymentType,
      classRight: "text-bold",
    },
  ];

  const listTypeVerify = [
    "Sử dụng digital OTP",
    "Gửi mã OTP qua số điện thoại đăng ký",
  ];
  const _onChangeTypeVerify = (value) => {
    onChangeVerify &&
      onChangeVerify(_.findIndex(listTypeVerify, value.target.value));
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

      <CheckBoxCommon
        title={
          "Tôi đồng ý với Điều khoản thanh toán Dịch vụ công trực tuyển qua kênh điện tử MB"
        }
      />

      <TitleTypeVerify>Hình thức xác thực</TitleTypeVerify>

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

export default AccountStep2;
