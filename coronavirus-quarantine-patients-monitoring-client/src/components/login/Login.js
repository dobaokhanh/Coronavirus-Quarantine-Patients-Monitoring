import React from 'react';
import { Form, FormItem, Input, Button, Icon, notification } from 'antd';

const login = (props) => (
    <Form
        className="login-form"
        onSubmit={props.submitted}
    >
        <FormItem
            rules={[
                {
                    required: true,
                    message: 'Please input your username or email',
                }
            ]}>
            <Input
                prefix={<Icon type='user' />}
                size='large'
                name='usernameOrEmail'
                placeholder="Username or Email" />
        </FormItem>
        <FormItem
            rules={[
                {
                    required: true,
                    message: 'Please input your password',
                }
            ]}>
            <Input
                prefix={<Icon type='lock' />}
                size='large'
                name='password'
                placeholder="password" />
        </FormItem>
        <FormItem>
            <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">register now!</Link>
        </FormItem>
    </Form>
);