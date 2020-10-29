import React, { useState, useRef } from "react";
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

const HomeContainer = () => {
  const modalOtp = useRef();
  const modalSignin = useRef();
  const modalDigitalOtp = useRef();

  const [curentTab, setCurentTab] = useState(0);
  const [typePay, setTypePay] = useState(0);
  const [typeVerify, setTypeVerify] = useState(1);

  const _onNextStep = (curent) => {
    if (typePay === 1) {
      switch (curent) {
        case 0:
          modalSignin.current.show();
          break;
        case 2:
          if (typeVerify === 0) modalOtp.current.show();
          else modalDigitalOtp.current.show();
          break;
        default:
          setCurentTab(curent + 1);
          break;
      }
    } else {
      if (curent === 2) {
        modalOtp.current.show();
      } else setCurentTab(curent + 1);
    }
  };

  const _onLoginSuccess = () => {
    setCurentTab(curentTab + 1);
  };

  const _onChangeVerify = (index) => {
    setTypeVerify(index);
  };

  const _onGoBack = () => {
    if (curentTab < 1) return;
    setCurentTab(curentTab - 1);
  };
  const onDoneOtp = (value) => {
    console.log("Home:", value);
  };

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
            <AccountStep1 onNext={_onNextStep} goBack={_onGoBack} />
          )}

          {typePay === 0 ? (
            <AtmStep2 onNext={_onNextStep} goBack={_onGoBack} />
          ) : (
            <AccountStep2
              onNext={_onNextStep}
              goBack={_onGoBack}
              onChangeVerify={_onChangeVerify}
            />
          )}
        </TabHome>

        <ModalOtp ref={modalOtp} onDone={onDoneOtp} />
        <ModalSignIn ref={modalSignin} onDone={_onLoginSuccess} />
        <ModalDigitalOtp ref={modalDigitalOtp} onDone={_onLoginSuccess} />
      </Container>
    </>
  );
};

export default HomeContainer;
