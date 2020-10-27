import React from "react";
import Styled from "./step-bar.style";
import { ViewCommon, TextCommon, ImageCommon } from "components";
import images from "assets/images";

const StepBar = ({ current = 0 }) => {
  const listStep = [
    { name: "Loại thanh toán" },
    { name: "Nhập thông tin" },
    { name: "Xác thực thông tin" },
  ];
  function _icState(index) {
    if (index < current) return images.icStepSuccess;
    else if (index === current) return images.icStepAction;
    else return images.icStepPendding;
  }
  return (
    <Styled>
      <ViewCommon className="ctn-step">
        {listStep.map((value, index) => (
          <>
            <ImageCommon className="" src={_icState(index)} />
            {index < listStep.length - 1 ? (
              <ViewCommon className="ctn-step-line" />
            ) : undefined}
          </>
        ))}
      </ViewCommon>
      <ViewCommon className="ctn-name">
        {listStep.map((value, index) => {
          return (
            <ViewCommon className="ctn-title" key={index}>
              <TextCommon>{value.name}</TextCommon>
            </ViewCommon>
          );
        })}
      </ViewCommon>
    </Styled>
  );
};

export default StepBar;
