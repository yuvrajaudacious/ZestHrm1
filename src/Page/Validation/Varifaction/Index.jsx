import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Form, Input, message } from 'antd';
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
        values.email === "yuvraj@gmail.com" 
      ) {
        navigate("/setpassword");
        message.success("Send a code Cheek ur Email ");
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
            src="favicon.png"
            alt="login logo"
            style={{ width: "rem" }}
          />
          <h3 style={{ marginLeft: "90" }}>Varifaction Code</h3>
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
      onFinishFailed={onFinishFailed}    >
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