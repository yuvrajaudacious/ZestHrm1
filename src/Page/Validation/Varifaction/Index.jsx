import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import Styles from "./style.module.css";

const Varicode = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={Styles.card}>
    <Card
      title={
        <>
          <img
            src="zestlogo.png"
            alt="login logo"
            style={{ width: "7rem" }}
          />{" "}
          <h6 style={{ marginRight: "7rem" }}>LOGIN NOW</h6>
        </>
      }
      bordered
      hoverable
      style={{ width: 370 }}
    >
      <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
     >
    <Form.Item
      name="email"
      rules={[
          {
            required: true,
            message: "Email is required",
          },
          {
            type: "email",
            message: "Email is not valid"
          },
        ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
          {
            required: true,
            message: "Password is required",
          },
          { min: 8, message: "Required min 8 character" },
          { max: 10, message: "Required max 10 character" },
        ]}
    >
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <a className={`login-form-forgot ${Styles.forget}`} href="">
        Forgot password
      </a>
    </Form.Item>

    <Form.Item>
    <Button
            type="primary"
            htmlType="submit"
            style={{
              width: 280,
              marginTop: 10,
              marginLeft: 18,
            }}
          >
            Login
          </Button>
      {/* Or <a href="">register now!</a> */}
    </Form.Item>
  </Form>
    </Card>
  </div>
  );
};

export default Varicode;