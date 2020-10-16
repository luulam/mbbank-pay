import React from "react";
import HeaderBar from "./component/header-bar";
import { Layout } from "antd";
const { Content } = Layout;
const HomeContainer = () => {
  return (
    <Layout>
      <HeaderBar />
      <Content></Content>
    </Layout>
  );
};

export default HomeContainer;
