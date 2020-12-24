import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
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
import { parseParam } from "helpers/url.helper";
import ServiceTransaction from "services/transaction.service";
import { useLocation } from "react-router-dom";
import { RefLoading } from 'components/ref/loading'
const ModalSignIn = forwardRef(({ children, onDone }, ref) => {
  const location = useLocation();
  const secureCode = parseParam(location.search).secureCode;
  const [open, setOpen] = useState(false);
  const [inputUserName, setInputUserName] = useState("HANGO2");
  const [inputPassword, setInputPassword] = useState("123456");
  const handleClose = () => { };
  const refChangeCode = useRef();

  useImperativeHandle(ref, () => ({
    show: () => {
      setOpen(true);
    },
  }));

  const onNext = () => {
    onDone();
    setOpen(false);
  };

  const onLogin = () => {
    let { captchaId, inputCode } = refChangeCode.current.getData();
    RefLoading.show()
    ServiceTransaction.authAccount({
      captcha: inputCode,
      captchaid: captchaId,
      user: inputUserName,
      password: inputPassword,
      paymentAction: "PAY",
      secureCode,
    })
      .then((res) => {
        RefLoading.hide()
        onDone(res);
        setOpen(false);
        console.log("object res: ", res);
      })
      .catch((err) => {
        RefLoading.hide()
        console.log("object err:", err);
      });
  };

  useEffect(() => {
    if (open) {
    }
  }, [open]);

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
          <Input
            value={inputUserName}
            onChangeValue={(value) => setInputUserName(value)}
          ></Input>
        </CtnInput>
        <CtnInput>
          <TitleInput>MẬT KHẨU</TitleInput>
          <Input
            value={inputPassword}
            onChangeValue={(value) => setInputPassword(value)}
          ></Input>
        </CtnInput>
        <CtnInput>
          <TitleInput>MÃ XÁC NHẬN</TitleInput>
          <ChangeCode ref={refChangeCode} />
        </CtnInput>

        <NotiError>Thông tin đăng nhập/ mât khẩu không chính xác</NotiError>

        <ButtonNext onClick={onLogin}>TIẾP TỤC</ButtonNext>
        <ButtonBack onClick={() => setOpen(false)}>HUỶ</ButtonBack>
      </Card>
    </ContainerModal>
  );
});

export default ModalSignIn;
