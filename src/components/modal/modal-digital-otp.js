import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { ChangeCode } from "components";
import {
  ContainerModal,
  Title,
  Card,
  CtnInput,
  SubTitle,
  ButtonBack,
  ButtonNext,
  TitleInput,
  Input,
  NotiError,
  CtnInputChangeCode,
} from "./modal-signin.style";
import Backdrop from "@material-ui/core/Backdrop";

const ModalDigitalOtp = ({ children, onDone, ...restProps }, ref) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {};

  useImperativeHandle(ref, () => ({
    show: () => {
      setOpen(true);
    },
  }));

  const onNext = () => {
    onDone();
    setOpen(false);
  };

  useEffect(() => {}, [open]);

  return (
    <ContainerModal open={open} onClose={handleClose}>
      <Card>
        <Title>Xác thực Digital OTP</Title>
        <SubTitle>
          1. Sử dụng App ngân hàng MBBank trên thiết bị đã đăng ký dịch vụ<br/>
          Digital OTP
          <br />
          2. Chọn xác thực giao dịch tại màn hình Login
          <br />
          3. Scan mã QR để nhận mã OTP
          <br />
          4. Nhập mã OTP để xác thực giao dịch
        </SubTitle>

        <Input></Input>
        <ButtonNext onClick={onNext}>XÁC THỰC</ButtonNext>
      </Card>
    </ContainerModal>
  );
};

export default forwardRef(ModalDigitalOtp);
