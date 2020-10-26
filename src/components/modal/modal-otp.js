import React, { useImperativeHandle, useState, forwardRef } from "react";
import Styled from "./modal-otp.style";
import Backdrop from "@material-ui/core/Backdrop";
import OtpInput from "../clone/otp-input";
import Button from "../common/button";
const ViewCommon = ({ children, ...restProps }, ref) => {
  const [open, setOpen] = useState(false);
  const [valueOtp, setValueOtp] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    show: () => {
      setOpen(true);
    },
  }));
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
          {"Nếu chưa nhận được, vui lòng chọn Gửi lại mã"}
        </span>
        <OtpInput
          shouldAutoFocus={true}
          value={valueOtp}
          onChange={(value) => setValueOtp(value)}
          numInputs={6}
          separator={<span>-</span>}
        />
        <span className={"txt-time"}>Mã xác thực sẽ hết trong ( 30s )</span>
        <Button className="btn-submit" onClick={handleClose}>
          Xác thực
        </Button>
      </div>
    </Styled>
  );
};

export default forwardRef(ViewCommon);
