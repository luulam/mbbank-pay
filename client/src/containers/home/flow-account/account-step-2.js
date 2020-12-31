import React, { useState, useEffect } from "react";
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
import { TYPE_VERIFY } from 'constants/app.const'
import { RefLoading } from 'components/ref/loading'
import ServiceTransaction from "services/transaction.service";
import { RefModalDigitalOtp } from 'components/modal/modal-digital-otp'
import { RefModalOtp } from 'components/modal/modal-otp'
import { RefNotify } from 'components/ref/notify'

const AccountStep2 = ({ onNext, goBack, navData, onChangeVerify }) => {
  const [indexTypeVerify, setIndexTypeVerify] = useState(0);
  const [nameTypeVerify, setNameTypeVerify] = useState();
  const [infoTransaction, setInfoTransaction] = useState();
  const dataLoginSuccess = navData.loginSuccess;
  const accountSelect = navData.accountSelect
  console.log("navData:", navData, "infoTransaction", infoTransaction)

  const getListTypeVerify = () => {
    let list = []
    if (dataLoginSuccess.otp && dataLoginSuccess.authDevice === "tkn") {
      list.push({ value: "Gửi mã Hard Token", name: TYPE_VERIFY.SMS })
    }
    if (dataLoginSuccess.otp) {
      list.push({ value: "Gửi mã OTP qua số điện thoại đăng ký", name: TYPE_VERIFY.SMS })
    }
    if (dataLoginSuccess.dotp) list.push({ value: "Sử dụng digital OTP", name: TYPE_VERIFY.DOTP })

    return list
  }
  const listTypeVerify = getListTypeVerify()

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

  // Function 

  const onDoneInputOtp = (otp) => {
    console.log("onDoneInputOtp", otp, "infoTransaction", infoTransaction)

    ServiceTransaction.verifyPayment({ codeOTP: otp, secureCode: infoTransaction.secureCode })
      .then(res => {
        console.log("verifyPayment res:", res)
      })
      .catch(err => {
        console.log("verifyPayment err:", err)
      })
  }

  const _onNextScreen = () => {
    console.log("AccountStep2 navData", navData, accountSelect)
    // return;
    if (indexTypeVerify === undefined) {
      RefNotify.push({ message: "Vui lòng chọn hình thức xác thực" })
      return
    }
    RefLoading.show()
    ServiceTransaction.createTransaction({ account: accountSelect, secureCode: navData.loginSuccess.secureCode })
      .then(res => {
        RefLoading.hide()
        console.log("res:", res)
        setInfoTransaction(res)

        if (listTypeVerify[indexTypeVerify].name === TYPE_VERIFY.SMS) {
          RefModalOtp.show({
            onDoneOtp: (otp) => {
              // console.log("onDoneInputOtp", otp, "infoTransaction", infoTransaction)
              RefLoading.show()
              ServiceTransaction.verifyPayment({ codeOTP: otp, secureCode: res.secureCode, transactionId: "string" })
                .then(verifyPaymentRes => {
                  RefModalOtp.hide()
                  RefLoading.hide()
                  onNext && onNext(2, verifyPaymentRes);
                  console.log("verifyPayment res:", verifyPaymentRes)
                })
                .catch(verifyPaymentErr => {
                  RefLoading.hide()
                  console.log("verifyPayment err:", verifyPaymentErr)
                })
            }
          })
        }
        if (listTypeVerify[indexTypeVerify].name === TYPE_VERIFY.DOTP) {
          RefModalDigitalOtp.show({
            idTransaction: res.dotpId,
            onDoneOtp: (otp) => {
              // console.log("onDoneInputOtp", otp, "infoTransaction", res.dotpId)

              RefLoading.show()
              ServiceTransaction.verifyPayment({ codeOTP: otp, secureCode: res.secureCode, transactionId: res.dotpId })
                .then(verifyPaymentRes => {
                  RefModalDigitalOtp.hide()
                  RefLoading.hide()
                  onNext && onNext(2, verifyPaymentRes);
                  console.log("verifyPayment res:", res)
                })
                .catch(verifyPaymentErr => {
                  RefLoading.hide()
                  console.log("verifyPayment err:", verifyPaymentErr)
                })
            }
          })
        }

      })
      .catch(err => {
        RefLoading.hide()
        console.log("Err", err)
      })
  };

  const _onChangeTypeVerify = (value, index) => {
    console.log("_onChangeTypeVerify", value, index, listTypeVerify[index].value)
    onChangeVerify && onChangeVerify(_.findIndex(listTypeVerify, value));
    setIndexTypeVerify(index);
    setNameTypeVerify(listTypeVerify[index].value)
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
        defaultSelect={true}
        title={
          "Tôi đồng ý với Điều khoản thanh toán Dịch vụ công trực tuyển qua kênh điện tử MB"
        }
      />

      <TitleTypeVerify>Hình thức xác thực</TitleTypeVerify>

      <SelectTypeVerify
        data={listTypeVerify}
        value={nameTypeVerify}
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
