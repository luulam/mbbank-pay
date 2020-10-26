import React, { useState } from "react";
import Styled from "./atm-step-1.style";
import { Button, Text, View, Title, Image, Input } from "components";
import images from "assets/images";

const FlowAtmStep1 = ({ onNext, goBack }) => {
  const [msgErrorNumberCard, setMsgErrorNumberCard] = useState("");

  const _onNextScreen = () => {
    onNext && onNext(1);
  };

  const onChangeNumberCard = (value) => {
    setMsgErrorNumberCard("")
  };

  return (
    <Styled >
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
          <Input
            style={{ flex: 2 }}
            placeholder="Nhập số thẻ"
            msgError={msgErrorNumberCard}
            onChangeValue={onChangeNumberCard}
          />
        </View>

        <View className={"ctn-row"}>
          <Text>Ngày phát hành:</Text>
          <Input style={{ flex: 2 }} placeholder="DD/MM/YYYY" />
        </View>
        <View className={"ctn-row"}>
          <Text>Tên chủ thẻ:</Text>
          <Input style={{ flex: 2 }} placeholder="Nhập tên không đấu" />
        </View>
        <View className={"ctn-row"}>
          <Text>Mã xác nhận:</Text>
          <Input style={{ flex: 2 }} placeholder="Nhập số thẻ" />
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
