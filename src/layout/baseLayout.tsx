import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";

const { Header, Content, Sider } = Layout;

const BaseLayout = () => {
  return (
    <div>
      <Layout>
        <Header style={{backgroundColor: "#fff"}}>Header</Header>
        <Layout>
          <Sider
            theme='light'
          >
            sider
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BaseLayout;
