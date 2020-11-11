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
} from "./change-code.element";
import images from "assets/images";

const ChangeCode = ({ ...restProps }, ref) => {
  const [code, setCode] = useState();
  const randomCode = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useEffect(() => {
    setCode(randomCode(6));
  }, []);
  return (
    <Container>
      <Input placeholder="Nhập tên không đấu"></Input>

      <ContainerChangeCode>
        <CtnCode>
          <InputShow disabled value={code} />
        </CtnCode>
        <CtnChangeCode onClick={() => setCode(randomCode(6))}>
          <TitleChangeCode>Đổi mã</TitleChangeCode>
          <ImgChangeCode src={images.icRoll} />
        </CtnChangeCode>
      </ContainerChangeCode>
    </Container>
  );
};

export default forwardRef(ChangeCode);
