import React, { useState } from "react";
import Styled from "./FlowAtmStep2.style";
import { Button, Text, View, Title, Image, Input } from "components";
import images from "assets/images";

const FlowAtmStep1 = ({ onNext, goBack }: any) => {
  const [selectCard, setSelectCard] = useState(0);
  const [msgErrorNumberCard, setMsgErrorNumberCard] = useState("");
  const listTypePay = [
    { name: `Thanh toán qua \nthẻ Atm`, img: images.atm },
    { name: `Thanh toán qua \nsố tài khoản`, img: images.profile },
  ];

  const _onSelectTypePay = (index: number) => {
    setSelectCard(index);
  };

  const _onNextScreen = () => {
    onNext && onNext(1);
  };

  const onChangeNumberCard = (value: any) => {};

  return (
    <Styled>
      <View className="ctn-title">
        <Title level={4}>Thanh toán qua thẻ ATM</Title>
        <Text>
          {
            "Vui lòng điều thông tin thẻ ngân hàng của bạn vào các trường để tiếp tục thanh toán"
          }
        </Text>
      </View>
      <View className={"ctn-form"}>
        <View className={"ctn-row"}>
          <Text>Số thẻ</Text>
          <View>
            <Input
              placeholder="Nhập số thẻ"
              msgError={msgErrorNumberCard}
              onChangeValue={onChangeNumberCard}
            />
          </View>
        </View>
        <View className={"ctn-row"}>
          <Text>Ngày phát hành:</Text>
          <View>
            <Input placeholder="DD/MM/YYYY" />
          </View>
        </View>
        <View className={"ctn-row"}>
          <Text>Tên chủ thẻ:</Text>
          <View>
            <Input placeholder="Nhập tên không đấu" />
          </View>
        </View>
        <View className={"ctn-row"}>
          <Text>Mã xác nhận:</Text>
          <View>
            <Input style={{ flex: 2 }} placeholder="Nhập số thẻ" />
            <Input style={{ flex: 1 }} placeholder="" disabled />
          </View>
        </View>

        <View className={"ctn-change-number"}>
          <Text>Đổi mã</Text>
        </View>

        <View className={"ctn-policy"}>
          <Text>Điều khoản & điều kiện sử dụng dịch vụ của MB</Text>
        </View>
      </View>

      <View className={"ctn-navigate"}>
        <Image src={images.icBack} onClick={goBack} />
        <Text className="back" onClick={goBack}>
          Quay về
        </Text>

        <Button
          className="btn-submit"
          onClick={() => {
            _onNextScreen();
          }}
        >
          Tiếp tục
        </Button>
      </View>
    </Styled>
  );
};

export default FlowAtmStep1;
