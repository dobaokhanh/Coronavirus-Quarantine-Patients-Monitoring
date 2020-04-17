import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './LoginForm.css';

const LoginForm = (props) => (

    <div className="login-container">
        <h1 className="page-title">Login</h1>
        <div className="login-content">
            <Form
                className="login-form"
                onSubmit={props.submitted}
            >
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username or email',
                        }
                    ]}>
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        size='large'
                        name='usernameOrEmail'
                        placeholder="Username or Email"
                        value={props.usernameOrEmail}
                        onChange={props.changed} />
                </Form.Item>
                <Form.Item
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
                        placeholder="password"
                        value={props.password}
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