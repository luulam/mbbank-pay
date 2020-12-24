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
import { RefLoading } from 'components/ref/loading'
import { RefNotify } from 'components/ref/notify'
import ServiceTransaction from "services/transaction.service";

const AccountStep1 = ({ onNext, goBack, navData }) => {
  const [typeVerify, setTypeVerify] = useState();
  const [indexAccountSelect, setIndexAccountSelect] = useState();

  const dataLoginSuccess = navData.loginSuccess;

  const listForm = [
    {
      title: "Mã tham chiếu",
      value: dataLoginSuccess.referenceCode,
      classRight: "text-blue",
    },
    { title: "Loại giao dịch:", value: dataLoginSuccess.collectName },
    { title: "Tới:", value: dataLoginSuccess.bankReceiverCode },
    { title: "Số tiền TT dịch vụ", value: dataLoginSuccess.amount },
    {
      title: "Phí giao dịch (bao gồm VAT):",
      value: dataLoginSuccess.feesAmount,
      classRight: "text-blue",
    },
    { title: "Tổng tiền:", value: dataLoginSuccess.totalAmount, classRight: "text-blue" },
    {
      title: "Số tiền bằng chữ:",
      value: dataLoginSuccess.totalAmountInWords,
    },
    {
      title: "Nội dung",
      value: dataLoginSuccess.contentPayment,
    },
    {
      itle: "Hình thức thanh toán",
      value: dataLoginSuccess.paymentType,
      classRight: "text-bold",
    },
  ];

  const _onNextScreen = () => {
    console.log("indexAccountSelect", indexAccountSelect)
    if (indexAccountSelect === undefined) {
      RefNotify.push({ message: "Vui lòng chọn tài khoản thanh toán" })
      return
    }
    onNext && onNext(1, dataLoginSuccess.accountList[indexAccountSelect].acctNo);
    // RefLoading.show()
    // ServiceTransaction.createTransaction({ account: dataLoginSuccess.accountList[indexAccountSelect].acctNo, secureCode: navData.secureCode })
    //   .then(res => {
    //     console.log("res:", res)
    //     RefLoading.hide()
    //     onNext && onNext(1, res);
    //   })
    //   .catch(err => {
    //     RefLoading.hide()
    //     console.log("Err", err)
    //   })
  };

  const listTypeVerify = dataLoginSuccess.accountList ? dataLoginSuccess.accountList.map(
    (value) => ({
      value: `${value.acctNm} / ${value.acctNo} / ${value.currentBalance ? value.currentBalance : ""}`,
      key: value.acctNo
    })
  ) : []

  const _onChangeTypeVerify = (value, index) => {
    console.log("valeu :qwe", value, index)
    setTypeVerify(value);
    setIndexAccountSelect(index)
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
