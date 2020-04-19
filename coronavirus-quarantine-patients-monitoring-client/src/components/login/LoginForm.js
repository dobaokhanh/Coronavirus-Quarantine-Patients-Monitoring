import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './LoginForm.css';

const LoginForm = (props) => (

    <div className="login-container">
        <h1 className="page-title">Login</h1>
        <div className="login-content">
            <Form
                className="login-form"
                onFinish={props.submitted}
            >
                <Form.Item
                    name="usernameOrEmail"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username or Email !',
                        }
                    ]}>
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        name="usernameOrEmail"
                        size='large'
                        placeholder="Username or Email"
                        onChange={props.changed}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password',
                        }
                    ]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size='large'
                        name='password'
                        type="password"
                        placeholder="Password"
                        onChange={props.changed} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    </div>


);

export default LoginForm;