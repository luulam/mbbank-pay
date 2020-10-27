import React, { useState, useRef } from "react";
import { TabCommon, ModalOtp, ModalSignIn } from "components";
import HeaderBar from "./component/header-bar";
import StepBar from "./component/step-bar";
import SelectTypePay from "./select-type-pay";
import AtmStep1 from "./flow-atm/atm-step-1";
import AtmStep2 from "./flow-atm/atm-step-2";
import AccountStep1 from "./flow-account/account-step-1";
import AccountStep2 from "./flow-account/account-step-2";

import { Container } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    borderRadius: "6px",
  },
}));

const HomeContainer = () => {
  const classes = useStyles();
  const modalOtp = useRef();
  const [curentTab, setCurentTab] = useState(0);
  const [typePay, setTypePay] = useState(0);

  const _onNextStep = (curent) => {
    if (curent === 2) {
      console.log("modalOtp", modalOtp);
      modalOtp.current.show();
    } else setCurentTab(curent + 1);
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
        <TabCommon current={curentTab} className={classes.root}>
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
            <AccountStep2 onNext={_onNextStep} goBack={_onGoBack} />
          )}
        </TabCommon>

        <ModalOtp ref={modalOtp} onDone={onDoneOtp} />
        <ModalSignIn/>
      </Container>
    </>
  );
};

export default HomeContainer;
