import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import Styled, {
  ContainerModal,
  Card,
  Title,
  SubTitle,
  TextTime,
  BtnSubmit
} from "./modal-otp.style";
import Backdrop from "@material-ui/core/Backdrop";
import OtpInput from "../otp-input";
import ButtonCommon from "../common/button";

export const RefModalOtp = {
  show: () => { },
  hide: () => { }
}

const ModalOtp = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({})
  const [valueInput, setValueInput] = useState()
  const [timeCountdown, setTimeCountdown] = useState(0);
  let timer = null;

  const handleClose = () => {
    setOpen(false);
  };
  const onDoneOtp = (value) => {
    onDone(value);
    setOpen(false);
  };

  const onDoneInputOtp = () => {
    data.onDoneOtp && data.onDoneOtp(valueInput)
  }

  const onStartCountDown = () => {
    clearTimeout(timer);
    setTimeCountdown(30);
  };

  const onReSendOtp = () => {
    onStartCountDown();
  };

  const onChangeValueInputOtp = (value) => {
    setValueInput(value)
  }

  useEffect(() => {
    if (open) onStartCountDown();
  }, [open]);

  useEffect(() => {
    if (timeCountdown <= 0) return;
    timer = setTimeout(() => {
      let newTimeCountdown = timeCountdown - 1;
      if (newTimeCountdown < 0) return;
      setTimeCountdown(newTimeCountdown);
    }, 1000);
  }, [timeCountdown]);

  useEffect(() => {
    RefModalOtp.show = (param) => {
      if (param) setData(param)
      setOpen(true);
    }
    RefModalOtp.hide = (param) => {
      if (param) setData(param)
      setOpen(false);
    }
  })

  return (
    <ContainerModal open={open} onClose={handleClose}>
      <Card className="ctn">
        <Title>Xác thực OTP</Title>
        <SubTitle>
          {"Chúng tôi đã gửi mã xác thực đến số điện thoại của bạn. "}
          <br />
          {"Nếu chưa nhận được, vui lòng chọn "}
          <a onClick={onReSendOtp}>Gửi lại mã</a>
        </SubTitle>
        <OtpInput onDone={onDoneInputOtp} className={"otp-input"} onChangeValue={onChangeValueInputOtp} />
        <TextTime>{`Mã xác thực sẽ hết trong ( ${timeCountdown}s )`}</TextTime>
        <BtnSubmit onClick={onDoneInputOtp}>Xác thực</BtnSubmit>
      </Card>
    </ContainerModal>
  );
};

export default ModalOtp;
