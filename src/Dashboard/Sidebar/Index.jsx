import {
  HomeOutlined,
  UserOutlined,
  FieldTimeOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

import React, { useState } from "react";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const items = [
    {
      label: <Link to={"/"}>Dashboard</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={"/about"}>TimeSheet</Link>,
      key: "2",
      icon: <FieldTimeOutlined />,
    },
    {
      label: <Link to="">Setting</Link>,
      key: "3",
      icon: <SettingOutlined />,
    },
    {
      label: <Link to="">Logout</Link>,
      key: "4",
      icon: <LogoutOutlined />,
      onclick: () => showDeleteConfirm(),
    },
  ];
  const { confirm } = Modal;

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
          }}
        >
          <img src="./zestlogo.png" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            items={[
              {
                href: "",
                title: (
                  <Link to="/">
                    <HomeOutlined />
                  </Link>
                ),
              },
              {
                href: "",
                title: (
                  <>
                    <UserOutlined />
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: "Application",
              },
            ]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
