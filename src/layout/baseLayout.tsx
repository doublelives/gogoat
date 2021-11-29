import React, { useState, useLayoutEffect } from "react";
import { Avatar, Dropdown, Input, Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
import { routes } from "@/routes";
import styles from "./layoutBase.module.scss";

const { Header, Content, Sider } = Layout;

const MenuList = () => {
  const nav = useNavigate();
  const curLocation = useLocation();
  const [openPath, setOpenPath] = useState(["/"]);
  const onSelectChange = ({ keyPath }) => {
    setOpenPath(keyPath);
  };
  useLayoutEffect(() => {
    setOpenPath([curLocation.pathname]);
  }, []);
  return (
    <Menu
      selectedKeys={openPath}
      onSelect={onSelectChange}
      mode="inline"
      theme="light"
    >
      {routes[0]?.children
        ?.map((r, i) => {
          return (
            r.path &&
            r.path !== "*" && (
              <Menu.Item key={r.path ?? i} onClick={() => nav(r.path!)}>
                {r.path}
              </Menu.Item>
            )
          );
        })
        .filter(Boolean)}
    </Menu>
  );
};

const SettingMenu = () => {
  return (
    <Menu>
      <Menu.Item>personal setting</Menu.Item>
      <Menu.Item>Log out</Menu.Item>
    </Menu>
  );
};

const BaseLayout = () => {
  const nav = useNavigate();
  return (
    <div>
      <Layout>
        <Header className={styles["header-wrapper"]}>
          <div className={styles["header-logo"]} onClick={() => nav("/")}>
            <div className={styles["logo-text"]}>GO-GOAT</div>
          </div>
          <div className={styles["header-nav"]}></div>
          <div className={styles["header-info"]}>
            <Dropdown overlay={SettingMenu} placement="topLeft" arrow>
              <Avatar size="large">U</Avatar>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider className={styles["sider-wrapper"]} theme="light">
            <MenuList />
          </Sider>
          <Content className={styles["content-wrapper"]}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BaseLayout;
