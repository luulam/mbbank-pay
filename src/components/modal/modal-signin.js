import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ContainerModal,
  TitleModal,
  Card,
  CtnInput,
  SubTitle,
  ButtonBack,
  ButtonNext,
  TitleInput,
  InputModal,
} from "./modal-signin.style";
import Backdrop from "@material-ui/core/Backdrop";

const ModalSignIn = ({ children, onDone, ...restProps }, ref) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {};
  useImperativeHandle(ref, () => ({
    show: () => {
      setOpen(true);
    },
  }));

  useEffect(() => {}, [open]);

  return (
    <ContainerModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Card>
        <TitleModal>Đăng nhập</TitleModal>
        <SubTitle>
          Đăng nhập tài khoản MB Internet Banking của bạn để <br />
          tiến hành thanh toán.
        </SubTitle>
        <CtnInput>
          <TitleInput>TÊN ĐĂNG NHẬP</TitleInput>
          <InputModal></InputModal>
        </CtnInput>
        <CtnInput>
          <TitleInput>MẬT KHẨU</TitleInput>
          <InputModal></InputModal>
        </CtnInput>
        <CtnInput>
          <TitleInput>MÃ XÁC NHẬN</TitleInput>
          <InputModal></InputModal>
        </CtnInput>
        <ButtonNext>TIẾP TỤC</ButtonNext>
        <ButtonBack>HUỶ</ButtonBack>
      </Card>
    </ContainerModal>
  );
};

export default forwardRef(ModalSignIn);
