import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";

const { Header, Content, Sider } = Layout;

const BaseLayout = () => {
  return (
    <div>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
          theme='light'
        >
          sider
        </Sider>
        <Layout style={{margin: '0 200px'}}>
          <Header style={{backgroundColor: '#fff'}}>Header</Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            right: 0,
          }}
          theme='light'
        >
          sider
        </Sider>
      </Layout>
    </div>
  );
};

export default BaseLayout;
