import React from "react";
import Styled from "./step-bar.style";
import { View, Text, Image } from "components";
import images from "assets/images";
const StepBar = ({ current = 0 }) => {
  console.log("current", current);
  const listStep = [
    { name: "Loại thanh toán" },
    { name: "Nhập thông tin" },
    { name: "Xác thực thông tin" },
  ];
  function _icState(index: number) {
    if (index < current) return images.icStepSuccess;
    else if (index === current) return images.icStepAction;
    else return images.icStepPendding;
  }
  return (
    <Styled>
      <View className="ctn-step">
        {listStep.map((value, index) => (
          <>
            <Image className="" src={_icState(index)} />
            {index < listStep.length - 1 ? (
              <View className="ctn-step-line" />
            ) : undefined}
          </>
        ))}
      </View>
      <View className="ctn-name">
        {listStep.map((value, index) => {
          return (
            <View className="ctn-title" key={index}>
              <Text>{value.name}</Text>
            </View>
          );
        })}
      </View>
    </Styled>
  );
};

export default StepBar;
