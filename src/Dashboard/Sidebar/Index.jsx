import {
  HomeOutlined,
  UserOutlined,
  FieldTimeOutlined,
  SettingOutlined,
  LogoutOutlined,
  DeleteTwoTone,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../Table";
import Tale from "../Table";
import Profile from "../Profile/Index";

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure Logout Your Account",
      icon: <DeleteTwoTone />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK");
        navigate("/");

      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const items = [
    {
      label: <Link to={""}>Dashboard</Link>,
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={""}>TimeSheet</Link>,
      key: "2",
      icon: <FieldTimeOutlined />,
    },
    {
      label: <Link to="">Setting</Link>,
      key: "3",
      icon: <SettingOutlined />,
    },
    {
      label: <Link to="">Profile</Link>,
      key: "4",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="">Logout</Link>,
      key: "5",
      icon: <LogoutOutlined />,
      onClick: () => showDeleteConfirm(),
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
            <Profile/>
            {/* <Tale/> */}
          </div>
        </Content>
     
      </Layout>
    </Layout>
  );
};

export default Sidebar;