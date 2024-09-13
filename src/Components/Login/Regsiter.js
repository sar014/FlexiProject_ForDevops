import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link,useNavigate} from 'react-router-dom'; 
import axios from 'axios';
import './register.css'

export const Register = () => {
    const navigate = useNavigate();
    const validateEmail = (_, value) => {
        if (!value.includes('@')) {
            return Promise.reject('Please enter a valid email address.');
        }
        return Promise.resolve();
    };

    const validateName = (_, value) => {
        if (value && value.length >= 3) {
            return Promise.resolve();
        }
        return Promise.reject('Name must be at least 3 characters long.');
    };

    const onFinish = (values, actionType) => {
        const { name, email } = values;
        if (actionType === 'register') {
            // Handle register action
            axios.post('http://localhost:3001/register', { name, email })
                .then(res => {
                    if (res.data.success) {
                        alert('Registration successful. You can now login.');
                        navigate('/home');
                    } else {
                        if (res.data.error === 'User already exists') {
                            alert('User already exists. Please login instead.');
                            navigate('/login');
                        } else {
                            alert('Registration failed. Please try again.');
                        }
                        alert('Registration failed. Please try again.');
                    }
                })
                .catch(error => {
                    console.error('Registration Error:', error);
                    alert('An error occurred. Please try again later.');
                });
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 400 }}>
                <h1 style={{textAlign: 'center' ,paddingTop:'200px' }}>Register</h1>
                <Form
                    name="register-form"
                    initialValues={{ remember: true }}
                    onFinish={values => onFinish(values, 'register')}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Username!' }, { validator: validateName }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' },{ validator: validateEmail }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" tyle={{ marginRight: 10 }}>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};