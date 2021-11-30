import React, { useState, useLayoutEffect } from "react";
import { Avatar, Breadcrumb, Dropdown, Input, Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
import { routes, aliasRouteMap } from "@/routes";
import styles from "./layoutBase.module.scss";
import { Link } from "react-router-dom";

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
  }, [curLocation.pathname]);
  return (
    <Menu
      selectedKeys={openPath}
      onSelect={onSelectChange}
      mode="inline"
      theme="light"
    >
      {
        <Menu.Item key={'/'} onClick={() => nav('/')}>
          Home
        </Menu.Item>
      }
      {routes[0]?.children
        ?.map((r, i) => {
          return (
            r.path &&
            r.path !== "*" && (
              <Menu.Item key={r.path ?? i} onClick={() => nav(r.path!)}>
                {aliasRouteMap[r.path]}
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
 
const BreadcrumbList = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{aliasRouteMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return <Breadcrumb className={styles['breadcrumb-wrapper']}>{breadcrumbItems}</Breadcrumb>
}

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
            <BreadcrumbList />
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BaseLayout;
