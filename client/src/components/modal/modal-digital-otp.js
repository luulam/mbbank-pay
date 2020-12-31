import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ContainerModal,
  Title,
  Card,
  SubTitle,
  ButtonNext,
  Input,
  NotiError,
  ImgQrCode,
  TitleQr,
  TextCountdown,
  ImgQRCode
} from "./modal-digital-otp.style";
import images from "assets/images";

export const RefModalDigitalOtp = {
  show: () => { },
  hide: () => { }
}

const ModalDigitalOtp = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({})
  const [inputDOTP, setInputDOTP] = useState('')
  const handleClose = () => { };

  const onNext = () => {
    console.log("data:", data)
    data.onDoneOtp && data.onDoneOtp(inputDOTP)

    // data.onDone && data.onDone();
    // setOpen(false);
  };

  useEffect(() => {
    RefModalDigitalOtp.show = (param) => {
      if (param) setData(param)
      setOpen(true);
    }
    RefModalDigitalOtp.hide = (param) => {
      if (param) setData(param)
      setOpen(false);
    }
  })

  return (
    <ContainerModal open={open} onClose={handleClose}>
      <Card>
        <Title>Xác thực Digital OTP</Title>
        <SubTitle>
          1. Sử dụng App ngân hàng MBBank trên thiết bị đã đăng ký dịch vụ
            <br />
            Digital OTP
            <br />
            2. Chọn xác thực giao dịch tại màn hình Login
            <br />
            3. Scan mã QR để nhận mã OTP
            <br />
            4. Nhập mã OTP để xác thực giao dịch
          </SubTitle>

        {data.idTransaction ? <ImgQRCode value={data.idTransaction} size={256} /> : undefined}
        <TitleQr>Mã QR</TitleQr>
        <TextCountdown>Mã xác thực sẽ hết sau (120s )</TextCountdown>
        <Input
          value={inputDOTP}
          onChangeValue={(value) => setInputDOTP(value)}
          placeholder="Nhập mã QR"
        />
        <ButtonNext onClick={onNext}>XÁC THỰC</ButtonNext>
      </Card>
    </ContainerModal>
  );
}


export default ModalDigitalOtp;
