import React from "react";
import { Container, NameStep } from "./step-bar.style";
import { ViewCommon, TextCommon, ImageCommon } from "components";
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

  return (
    <Container>
      <ViewCommon className="ctn-step">
        {listStep.map((value, index) => (
          <>
            <ImageCommon className="" src={icState(index)} />
            {index < listStep.length - 1 ? (
              <ViewCommon className="ctn-step-line" />
            ) : undefined}
          </>
        ))}
      </ViewCommon>
      <ViewCommon className="ctn-name">
        {listStep.map((value, index) => {
          return (
            <NameStep
              className="ctn-title"
              key={index}
              enable={index === current}
            >
              {value.name}
            </NameStep>
          );
        })}
      </ViewCommon>
    </Container>
  );
};

export default StepBar;
