import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, InputNumber, message } from 'antd';
import Styles from "./style.module.css";
import Contain from '../../Contain';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Varicode = () => {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const { data } = await axios.post(`https://dummyjson.com/products/add`, values);
      localStorage.setItem("token", data.token);
      if (
        values.password === "12345678"
      ) {
        navigate("/about");
        message.success("Successfuly login");
        console.log("right id password");
      } else {
        message.error("Please enter correct email or password");
      }
    } catch (error) {
      message.error("Please enter correct email or password");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={Styles.Bg}>
<Contain/>
    <div className={Styles.card}>
    <Card
      title={
        <>
          <img
            src="zestlogo.png"
            alt="login logo"
            style={{ width: "7rem" }}
          />{" "}
          <h3 style={{ marginRight: "7rem" }}>Set Password</h3>
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
        >
   <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
         placeholder='Enter  Password'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password
         
        placeholder='Enter Confirm Password' />
      </Form.Item>
      
<Input placeholder='Enter Code'/>
    <Form.Item>
    <Button
            type="primary"
            htmlType="submit"
            style={{
              width: 320,
              marginTop: 10,
              marginLeft: 0,
            }}
          >
            Send A Code
          </Button>
      {/* Or <a href="">register now!</a> */}
    </Form.Item>
  </Form>
    </Card>
  </div>
              </div>
  );
};

export default Varicode;