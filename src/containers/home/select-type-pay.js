import React from "react";
import {
  Container,
  CtnListType,
  CtnItemType,
  Title,
  SubTitle,
  ButtonSubmit,
} from "./select-type-pay.style";
import {
  ButtonCommon,
  TextCommon,
  ViewCommon,
  TitleCommon,
  ImageCommon,
} from "components";
import images from "assets/images";

const FlowAtmStep1 = ({ onNext, setTypePay, typePay }) => {
  const listTypePay = [
    {
      name: `Thanh toán qua \nthẻ Atm`,
      img: images.atm,
      imgDisable: images.atmDisable,
    },
    {
      name: `Thanh toán qua \nsố tài khoản`,
      img: images.profile,
      imgDisable: images.profileDisable,
    },
  ];

  const _onSelectTypePay = (index) => {
    setTypePay(index);
  };

  const _onNextScreen = () => {
    onNext && onNext(0);
  };

  return (
    <Container>
      <Title>Thanh toán</Title>
      <SubTitle>
        Chào mừng bạn đến với trang thanh toán điện tử của MB!
        <br /> Vui lòng chọn một trong hai hình thức thanh toán
      </SubTitle>

      <CtnListType className="ctn-select-box">
        {listTypePay.map((value, index) => {
          let isSelect = index === typePay;
          return (
            <CtnItemType
              isSelect={isSelect}
              key={index}
              className={`ctn-item ${isSelect ? "ctn-item-select" : ""}`}
              onClick={() => _onSelectTypePay(index)}
            >
              <ImageCommon
                className={`img-type`}
                src={isSelect ? value.img : value.imgDisable}
              />
              <TextCommon>{value.name}</TextCommon>
              <ImageCommon
                className="img-select"
                src={isSelect ? images.icSelectOn : images.icSelectOff}
              />
            </CtnItemType>
          );
        })}
      </CtnListType>

      <ButtonSubmit
        onClick={() => {
          _onNextScreen();
        }}
      >
        Tiếp tục
      </ButtonSubmit>
    </Container>
  );
};

export default FlowAtmStep1;
