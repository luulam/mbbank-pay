import React, { useState } from "react";
import Styled from "./FlowAtmStep1.style";
import { Button, Text, View, Title, Image } from "components";
import images from "assets/images";

const FlowAtmStep1 = ({ onNext }: any) => {
  const [selectCard, setSelectCard] = useState(0);

  const listTypePay = [
    { name: `Thanh toán qua \nthẻ Atm`, img: images.atm },
    { name: `Thanh toán qua \nsố tài khoản`, img: images.profile },
  ];

  const _onSelectTypePay = (index: number) => {
    setSelectCard(index);
  };

  const _onNextScreen = () => {
    onNext && onNext(0);
  };
  return (
    <Styled>
      <View className="ctn-title">
        <Title>Thanh toán</Title>
        <Text>
          {
            "Chào mừng bạn đến với trang thanh toán điện tử của MB \nVui lòng chọn một trong hai hình thức thanh toán"
          }
        </Text>
      </View>

      <View className="ctn-select-box">
        {listTypePay.map((value, index) => {
          let isSelect = index === selectCard;
          return (
            <View
              className={`ctn-item ${isSelect ? "ctn-item-select" : ""}`}
              onClick={() => _onSelectTypePay(index)}
            >
              <Image className={`img-type `} src={value.img} />
              <Text>{value.name}</Text>
              <Image
                className="img-select"
                src={isSelect ? images.icSelectOn : images.icSelectOff}
              />
            </View>
          );
        })}
      </View>

      <Button
        className="btn-submit"
        onClick={() => {
          _onNextScreen();
        }}
      >
        Tiếp tục
      </Button>
    </Styled>
  );
};

export default FlowAtmStep1;
