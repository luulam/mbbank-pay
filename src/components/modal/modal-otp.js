import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import Styled from "./modal-otp.style";
import Backdrop from "@material-ui/core/Backdrop";
import OtpInput from "../otp-input";
import Button from "../common/button";
const ViewCommon = ({ children, onDone, ...restProps }, ref) => {
  const [open, setOpen] = useState(false);
  const [valueOtp, setValueOtp] = useState("");
  const [timeCountdown, setTimeCountdown] = useState(0);
  let timer = null;
  const handleOpen = () => {
    setOpen(true);
  };

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
    <Styled
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <div className="ctn">
        <h1>Xác thực OTP</h1>
        <span>
          {"Chúng tôi đã gửi mã xác thực đến số điện thoại của bạn. "}
          <br />
          {"Nếu chưa nhận được, vui lòng chọn "}
          <a onClick={onReSendOtp}>Gửi lại mã</a>
        </span>
        <OtpInput onDone={onDoneOtp} className={"otp-input"} />
        <span
          className={"txt-time"}
        >{`Mã xác thực sẽ hết trong ( ${timeCountdown}s )`}</span>
        <Button className="btn-submit" onClick={handleClose}>
          Xác thực
        </Button>
      </div>
    </Styled>
  );
};

export default forwardRef(ViewCommon);
