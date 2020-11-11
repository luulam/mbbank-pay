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
const ViewCommon = ({ children, onDone, ...restProps }, ref) => {
  const [open, setOpen] = useState(false);
  const [timeCountdown, setTimeCountdown] = useState(0);
  let timer = null;

  const handleClose = () => {
    setOpen(false);
  };
  const onDoneOtp = (value) => {
    onDone(value);
    setOpen(false);
  };

  const onStartCountDown = () => {
    clearTimeout(timer);
    setTimeCountdown(30);
  };

  const onReSendOtp = () => {
    onStartCountDown();
  };

  useImperativeHandle(ref, () => ({
    show: () => {
      setOpen(true);
    },
  }));

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

  useEffect(() => {}, []);

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
        <OtpInput onDone={onDoneOtp} className={"otp-input"} />
        <TextTime>{`Mã xác thực sẽ hết trong ( ${timeCountdown}s )`}</TextTime>
        <BtnSubmit onClick={handleClose}>Xác thực</BtnSubmit>
      </Card>
    </ContainerModal>
  );
};

export default forwardRef(ViewCommon);
