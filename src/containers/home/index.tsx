import React, { useState } from "react";
import Styled from "./index.style";
import { View } from "components";
import HeaderBar from "./component/header-bar";
import StepBar from "./component/step-bar";
import FlowAtmStep1 from "./flow-atm/FlowAtmStep1";
import { Layout } from "antd";
const { Content } = Layout;

const HomeContainer = () => {
  const [curentTab, setCurentTab] = useState(0);

  const _onNextStep = (curent: number) => {
    setCurentTab(curent + 1);
  };
  return (
    <Styled>
      <Layout>
        <HeaderBar />
        <Content className="content">
          <View className="form" style={{}}>
            <StepBar current={curentTab} />
            <View className="form-input">
              <FlowAtmStep1 onNext={_onNextStep} />
            </View>
          </View>
        </Content>
      </Layout>
    </Styled>
  );
};
export default HomeContainer;
