import React, { useState, useRef, useEffect } from "react";
import { TabCommon, ModalOtp, ModalSignIn, ModalDigitalOtp } from "components";
import HeaderBar from "./component/header-bar";
import StepBar from "./component/step-bar";
import SelectTypePay from "./select-type-pay";
import AtmStep1 from "./flow-atm/atm-step-1";
import AtmStep2 from "./flow-atm/atm-step-2";
import AccountStep1 from "./flow-account/account-step-1";
import AccountStep2 from "./flow-account/account-step-2";
import { TabHome } from "./index.style";
import { Container } from "@material-ui/core/";
import { parseParam } from "helpers/url.helper";
import { useLocation } from "react-router-dom";
import { RefModalDigitalOtp } from 'components/modal/modal-digital-otp'
import { RefModalOtp } from 'components/modal/modal-otp'
import { Redirect } from 'react-router-dom'


const HomeContainer = () => {
  const location = useLocation();
  const secureCode = parseParam(location.search).secureCode;

  const modalOtp = useRef();
  const modalSignin = useRef();
  const modalDigitalOtp = useRef();
  const [isPaySuccess, setIsPaySuccess] = useState(false)
  const [curentTab, setCurentTab] = useState(0);
  const [typePay, setTypePay] = useState(0);
  const [typeVerify, setTypeVerify] = useState(1);
  const [storeData, setStoreData] = useState({ loginSuccess: {}, infoTransaction: {} });

  const _onNextStep = (curent, data) => {
    // RefModalOtp.show()
    if (typePay === 1) {
      switch (curent) {
        case 0:
          modalSignin.current.show();
          break;
        case 1:
          setStoreData(_.assign(storeData, { accountSelect: data }));
          setCurentTab(curent + 1);
          break;
        case 2:
          // if (typeVerify === 0) modalOtp.current.show();
          // else modalDigitalOtp.current.show();
          setIsPaySuccess(true)
          window.open(data, '_blank');
          break;
      }
    } else {
      if (curent === 2) {
        modalOtp.current.show();
      } else setCurentTab(curent + 1);
    }
  };

  const _onLoginSuccess = (res) => {
    setStoreData(_.assign(storeData, { loginSuccess: res }));
    setCurentTab(curentTab + 1);
  };

  const _onChangeVerify = (index) => {
    setTypeVerify(index);
  };

  const _onGoBack = () => {
    if (curentTab < 1) return;
    setCurentTab(curentTab - 1);
  };

  if (isPaySuccess) return <Container maxWidth="sm">
    <p style={{ textAlign: "center" }}>Thanh toán Thành công</p>
  </Container>
  if (!secureCode) return <Container maxWidth="sm">
    <p style={{ textAlign: "center" }}>Đường dẫn không đúng</p>
  </Container>
  return (
    <>
      <HeaderBar />
      <Container maxWidth="sm">
        <StepBar current={curentTab} />
        <TabHome current={curentTab}>
          <SelectTypePay
            onNext={_onNextStep}
            setTypePay={setTypePay}
            typePay={typePay}
          />

          {typePay === 0 ? (
            <AtmStep1 onNext={_onNextStep} goBack={_onGoBack} />
          ) : (
              <AccountStep1
                onNext={_onNextStep}
                goBack={_onGoBack}
                navData={storeData}
              />
            )}

          {typePay === 0 ? (
            <AtmStep2 onNext={_onNextStep} goBack={_onGoBack} />
          ) : (
              <AccountStep2
                onNext={_onNextStep}
                goBack={_onGoBack}
                onChangeVerify={_onChangeVerify}
                navData={storeData}
              />
            )}
        </TabHome>

        <ModalSignIn ref={modalSignin} onDone={_onLoginSuccess} />

      </Container>
    </>
  );
};

export default HomeContainer;
