import React, { useState } from "react";
import Styled from "./step-bar.style";

import { Layout, Steps, Typography } from "antd";
const { Text } = Typography;

const StepBar = () => {
  const [current, setCurrent] = useState(0);
  const listStep = [
    { name: "Loại thanh toán" },
    { name: "Nhập thông tin" },
    { name: "Xác thực thông tin" },
  ];

  return (
    <Styled>
      <div className="ctn-step">
        {listStep.map((value, index) => {
          return (
            <>
              <div
                className="ctn-step-circle"
                style={{ background: index <= current ? "blue" : "gray" }}
              ></div>

              {index < listStep.length - 1 ? (
                <div className="ctn-step-line" />
              ) : undefined}
            </>
          );
        })}
      </div>
      <div className="ctn-name">
        {listStep.map((value) => {
          return (
            <div className="ctn-title">
              <Text>{value.name}</Text>
            </div>
          );
        })}
      </div>
    </Styled>
  );
};
export default StepBar;
