  import {
    HomeOutlined,
    UserOutlined,
    FieldTimeOutlined,
    SettingOutlined,
    LogoutOutlined,
    DeleteTwoTone,
  } from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme, Modal, Avatar, Space, Input } from "antd";
// import { ExclamationCircleFilled } from "@ant-design/icons";
import Styles from "./style.module.css";
import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Table from "../Table";
import Tale from "../Table";
import Profile from "../Profile/Index";
import StopWatch from "../TimeSheet/StopWatch/Index";
// import Search from "antd/es/transfer/search";
// import Adduser from "../../Page/Adduser";

const { Header, Content, Footer, Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure Logout Your Account",
      icon: <LogoutOutlined />,
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
  
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
    const onSearch = (value) => console.log(value);
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
        <Header style={{ height: 70, background: colorBgContainer }}>
          <Avatar.Group >
            <Link to="/">
            <Avatar className={Styles.avatar} src="https://ca.slack-edge.com/T01TRSXL4NS-U03BAAA889Y-03a953eb03c3-512" />
            </Link>
          <div> 
          <h4 className={Styles.text}>Yuvraj Baloriya</h4>
          </div> 
          </Avatar.Group>
        <Space direction="vertical">
    {/* <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
    //   }} */}

    <Search className={Styles.search}
      placeholder="input search text"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
        </Header>
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
          <StopWatch/>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
