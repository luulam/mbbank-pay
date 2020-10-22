import React, { useState } from "react";
import Styled from "./FlowAtmStep2.style";
import { Button, Text, View, Title, Image, Input } from "components";
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
    onNext && onNext(1);
  };

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
          <Text className={"flex1"}>Số thẻ</Text>
          <View className={"flex2"}>
            <Input className={"flex2"} placeholder="Nhập số thẻ" />
          </View>
        </View>
        <View className={"ctn-row"}>
          <Text className={"flex1"}>Ngày phát hành</Text>
          <View className={"flex2"}>
            <Input className={"flex2"} placeholder="Nhập số thẻ" />
          </View>
        </View>
        <View className={"ctn-row"}>
          <Text className={"flex1"}>Tên chủ thẻ</Text>
          <View className={"flex2"}>
            <Input className={"flex2"} placeholder="Nhập số thẻ" />
          </View>
        </View>
        <View className={"ctn-row"}>
          <Text className={"flex1"}>Mã xác nhận</Text>
          <View className={"flex2 row"}>
            <Input className={"flex2"} placeholder="Nhập số thẻ" />
            <Input className={"flex1"} placeholder="Nhập số thẻ" />
          </View>
        </View>
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
