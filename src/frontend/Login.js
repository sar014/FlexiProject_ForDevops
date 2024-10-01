import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState(false); // To handle button loading state
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true); // Set loading to true when login starts
    const { username, password } = values;

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // Save the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Display success message and navigate to home
      message.success('Login successful');
      navigate('/home');
    } catch (error) {
      message.error('Invalid username or password');
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 400 }}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: 300, margin: '0 auto' }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Log in
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/register">Register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
