import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link,useNavigate} from 'react-router-dom';

import axios from 'axios';
import './login.css'

export const Login = () => {
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
        const { name, email } = values; // Destructure values here
        if (actionType === 'login') {
            // Handle login action
            axios.post('http://localhost:3001/login', { name, email })
                .then(res => {
                    if (res.data.validation) {
                        alert('Your credentials are correct. Thank You');
                        navigate('/home');
                        // Redirect to home page upon successful login

                    } else {
                        alert('Wrong Credentials. Please try again');
                    }
                })
                .catch(error => {
                    console.error('Login Error:', error);
                    alert('An error occurred. Please try again later.');
                });
        } 
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: 400 }}>
                <h1 style={{ textAlign: 'center' ,paddingTop:'200px'}}>Login</h1>
                <Form
                    name="login-register-form"
                    initialValues={{ remember: true }}
                    onFinish={values => onFinish(values, 'login')} 
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
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: 10 }}>
                            Log in
                        </Button>
                        <Link to="/register">register now!</Link>
                    
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
