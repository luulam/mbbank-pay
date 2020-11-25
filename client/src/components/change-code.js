import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  Container,
  CtnCode,
  Input,
  InputShow,
  CtnChangeCode,
  TitleChangeCode,
  ImgChangeCode,
  ContainerChangeCode,
  ImageCode,
  Loading,
} from "./change-code.element";
import images from "assets/images";
import ServiceTransaction from "services/transaction.service";

const ChangeCode = forwardRef(({ ...restProps }, ref) => {
  const [inputCode, setInputCode] = useState("");
  const [captchaId, setCaptchaId] = useState();
  const [captchaImg, setCaptchaImg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useImperativeHandle(ref, () => ({
    getData: () => ({ captchaId, inputCode }),
  }));

  const onGetCapcha = () => {
    if (isLoading) return;
    setIsLoading(true);
    ServiceTransaction.getCapcha()
      .then((resCapcha) => {
        setIsLoading(false);
        console.log("resCapcha", resCapcha);
        setCaptchaImg(resCapcha.captchaImg);
        setCaptchaId(resCapcha.captchaId);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("ERR onGetCapcha:", err);
      });
  };

  // const randomCode = (length) => {
  //   var result = "";
  //   var characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   var charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // };

  useEffect(() => {
    onGetCapcha();
  }, []);

  return (
    <Container>
      <Input
        placeholder="Nhập Code"
        value={inputCode}
        onChange={(e) => setInputCode(e.target.value)}
      ></Input>
      <ContainerChangeCode>
        <CtnCode>
          {isLoading ? (
            <Loading />
          ) : (
            <ImageCode src={`data:image/jpeg;base64,${captchaImg}`} />
          )}
        </CtnCode>
        <CtnChangeCode onClick={onGetCapcha}>
          <TitleChangeCode>Đổi mã</TitleChangeCode>
          <ImgChangeCode src={images.icRoll} />
        </CtnChangeCode>
      </ContainerChangeCode>
    </Container>
  );
});

export default ChangeCode;
