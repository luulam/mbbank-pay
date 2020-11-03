import React from "react";
import {
  Container,
  ImgBack,
  CtnBack,
  TitleBtnBack,
  BtnSubmit,
} from "./navigation-bottom.style";
import images from "assets/images";

const NavigationBottom = ({ onBack, onNext, nameNext = "Tiếp tục" }) => {
  return (
    <Container>
      <CtnBack onClick={onBack}>
        <ImgBack src={images.icBack}></ImgBack>
        <TitleBtnBack>Quay về</TitleBtnBack>
      </CtnBack>
      <BtnSubmit onClick={onNext}>{nameNext}</BtnSubmit>
    </Container>
  );
};

export default NavigationBottom;
