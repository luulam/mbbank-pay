import React from "react";
import {
  Container,
  NameStep,
  CtnName,
  CtnImage,
  LineDot,
  Image,
} from "./step-bar.style";
import images from "assets/images";

const StepBar = ({ current = 0 }) => {
  const listStep = [
    { name: "Loại thanh toán" },
    { name: "Nhập thông tin" },
    { name: "Xác thực thông tin" },
  ];

  const icState = (index) => {
    if (index < current) return images.icStepSuccess;
    else if (index === current) return images.icStepAction;
    else return images.icStepPendding;
  };

  const getStyle = (index, length) => {
    if (index === 0) return { textAlign: "left" };
    if (index === length - 1) return { textAlign: "right" };
    return { textAlign: "center" };
  };

  return (
    <Container>
      <CtnImage>
        {Array.from(new Array(listStep.length * 2)).map((value, index) => {
          let indexReal = Math.floor(index / 2);
          return index % 2 === 0 ? (
            index !== 0 ? (
              <LineDot key={index} enable={current > indexReal - 1} />
            ) : undefined
          ) : (
            <Image key={index} className="" src={icState(indexReal)} />
          );
        })}
      </CtnImage>
      <CtnName>
        {listStep.map((value, index) => {
          return (
            <NameStep
              style={getStyle(index, listStep.length)}
              className="ctn-title"
              key={index}
              enable={index === current}
            >
              {value.name}
            </NameStep>
          );
        })}
      </CtnName>
    </Container>
  );
};

export default StepBar;
