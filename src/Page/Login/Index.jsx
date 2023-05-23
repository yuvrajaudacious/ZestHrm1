import { Button, Form, Input, Card, message, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import Styles from "./style.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const { data } = await axios.post(`https://dummyjson.com/products/add`, values);
      localStorage.setItem("token", data.token);
      if (
        values.email === "yuvraj@gmail.com" &&
        values.password === "yuvraj123"
      ) {
        navigate("/dashboard");
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
    <div className={Styles.card}>
      <Card
        title={
          <>
            <img
              src="zestlogo.png"
              alt="login logo"
              style={{ width: "7rem" }}
            />{" "}
            <h7 style={{ marginRight: "7rem" }}>LOGIN NOW</h7>
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

        <Link className={`login-form-forgot ${Styles.forget}`} to="/Varicode">
          Forgot password
        </Link>
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
export default Login;
    