import React from "react";
import Styled from "./index.style";
import HeaderBar from "./component/header-bar";
import StepBar from "./component/step-bar";
import FlowAtmStep1 from "./flow-atm/FlowAtmStep1";
import { Layout, Steps } from "antd";
const { Content } = Layout;

const HomeContainer = () => {
  return (
    <Layout>
      <HeaderBar />
      <Content className="content">
        <div className="form" style={{}}>
          <StepBar />

          <div className="form-input">
            <FlowAtmStep1 />
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default Styled(HomeContainer);
