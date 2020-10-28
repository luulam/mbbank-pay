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

const ModalSignIn = ({ children, onDone, ...restProps }, ref) => {
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
        <Title>Đăng nhập</Title>
        <SubTitle>
          Đăng nhập tài khoản <a>MB Internet Banking</a> của bạn để <br />
          tiến hành thanh toán.
        </SubTitle>
        <CtnInput>
          <TitleInput>TÊN ĐĂNG NHẬP</TitleInput>
          <Input></Input>
        </CtnInput>
        <CtnInput>
          <TitleInput>MẬT KHẨU</TitleInput>
          <Input></Input>
        </CtnInput>
        <CtnInput>
          <TitleInput>MÃ XÁC NHẬN</TitleInput>
          <ChangeCode />
        </CtnInput>

        <NotiError>Thông tin đăng nhập/ mât khẩu không chính xác</NotiError>

        <ButtonNext onClick={onNext}>TIẾP TỤC</ButtonNext>
        <ButtonBack onClick={() => setOpen(false)}>HUỶ</ButtonBack>
      </Card>
    </ContainerModal>
  );
};

export default forwardRef(ModalSignIn);
