import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true); // Start button loading
    const { username, password } = values;

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
      });

      // Show success message and navigate to login or home page
      message.success('Registration successful! Redirecting to login...');

      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate('/'); // Change this to '/home' if you want to navigate to home page directly
      }, 2000); // 2-second delay before redirection
    } catch (error) {
      message.error('Failed to register user');
    } finally {
      setLoading(false); // Stop button loading
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: 400 }}>
        <h1 style={{ textAlign: 'center' }}>Register</h1>
        <Form
          name="register_form"
          onFinish={onFinish}
          style={{ maxWidth: 300, margin: '0 auto' }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input name="username" prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password name="password" prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
