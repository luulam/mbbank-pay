import React, { useState } from "react";
import Styled from "./index.style";
import { View, Tab } from "components";
import HeaderBar from "./component/header-bar";
import StepBar from "./component/step-bar";
import FlowAtmStep1 from "./flow-atm/FlowAtmStep1";
import FlowAtmStep2 from "./flow-atm/FlowAtmStep2";
import { Layout } from "antd";
const { Content } = Layout;

const HomeContainer = () => {
  const [curentTab, setCurentTab] = useState(1);

  const _onNextStep = (curent: number) => {
    setCurentTab(curent + 1);
  };
  const _onGoBack = () => {
    if (curentTab < 1) return;
    setCurentTab(curentTab - 1);
  };

  return (
    <Styled>
      <Layout>
        <HeaderBar />
        <Content className="content">
          <View className="form" style={{}}>
            <StepBar current={curentTab} />
            <Tab current={curentTab} className="form-input">
              <FlowAtmStep1 onNext={_onNextStep} />
              <FlowAtmStep2 onNext={_onNextStep} goBack={_onGoBack} />
            </Tab>
          </View>
        </Content>
      </Layout>
    </Styled>
  );
};
export default HomeContainer;
