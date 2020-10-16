import React from "react";
import Styled from "./FlowAtmStep1.style";
import { Button, Text, View } from "components";

const FlowAtmStep1 = () => {
  return (
    <Styled>
      <div className="ctn-title">
        <Text>Thanh toán</Text>
        <Text>
          Chào mừng bạn đến với trang thanh toán điện tử của MB! Vui lòng chọn
          một trong hai hình thức thanh toán
        </Text>
      </div>
      <div></div>
      {/* <div> */}
      <Button type="primary">Primary Button</Button>
      {/* </div> */}
    </Styled>
  );
};

export default FlowAtmStep1;
