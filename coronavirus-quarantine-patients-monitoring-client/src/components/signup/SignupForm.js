import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import {
    NAME_MAX_LENGTH, NAME_MIN_LENGTH,
    USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH,
    EMAIL_MAX_LENGTH, PASSWORD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH
} from '../../utils/Constants';

import { checkEmailAvailability, checkUserNameAvailability } from '../../utils/APIUtils';
import './SignupForm.css';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SignupForm = (props) => (

    <div className="signup-container">
        <h1 className="page-title">Sign Up</h1>
        <div className="signup-content">
            <Form
                {...formItemLayout}
                onFinish={props.submitted}
                className="signup-form">
                <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your full name'
                        },
                        {
                            validator(rule, value) {
                                if (value.length < NAME_MIN_LENGTH) {
                                    return Promise.reject(`Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`);
                                } else if (value.length > NAME_MAX_LENGTH) {
                                    return Promise.reject(`Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`);
                                }
                                return Promise.resolve();
                            }
                        }
                    ]} >
                    <Input
                        size="large"
                        name="name"
                        autoComplete="off"
                        placeholder="Your full name"
                    />
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your username!'
                        },
                        {
                            validator(rule, value) {
                                if (value.length < USERNAME_MIN_LENGTH) {
                                    return Promise.reject(`Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`);
                                } else if (value.length > USERNAME_MAX_LENGTH) {
                                    return Promise.reject(`Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`);
                                }
                                checkUserNameAvailability(value)
                                    .then(response => {
                                        if (response.available) {
                                            return Promise.resolve();
                                        } else {
                                            return Promise.reject('This username is already taken !');
                                        }
                                    })
                                    .catch(error => {
                                        // Marking validate success, Form will be rechecked at server side
                                        return Promise.resolve();
                                    });
                                return Promise.resolve();
                            }
                        }
                    ]}
                >
                    <Input
                        size="large"
                        name="username"
                        autoComplete="off"
                        placeholder="An unique username"
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your email!'
                        },
                        {
                            validator(rule, value) {
                                if (value.length > EMAIL_MAX_LENGTH) {
                                    return Promise.reject(`Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`);
                                }
                                checkEmailAvailability(value)
                                    .then(response => {
                                        if (response.available) {
                                            return Promise.resolve();
                                        } else {
                                            return Promise.reject('This email is already taken !');
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        // Marking validate success, Form will be rechecked at server side
                                        return Promise.resolve();
                                    });
                                return Promise.resolve();
                            }
                        }

                    ]} >
                    <Input
                        size="large"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Your email"
                    />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!'
                        },
                        {
                            validator(rule, value) {
                                if (value.length < PASSWORD_MIN_LENGTH) {
                                    return Promise.reject(`Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`);
                                } else if (value.length > PASSWORD_MAX_LENGTH) {
                                    return Promise.reject(`Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`);
                                }
                                return Promise.resolve();
                            }
                        }
                    ]}
                >
                    <Input
                        size="large"
                        name="password"
                        type="password"
                        autoComplete="off"
                        placeholder="A password between 6 to 20 characters"
                    />
                </Form.Item>
                <Form.Item
                    {...tailFormItemLayout}>
                    <Button type="primary"
                        htmlType="submit"
                        size="large"
                        className="signup-form-button">Sign up</Button>
                Already registed? <Link to="/login">Login now!</Link>
                </Form.Item>
            </Form>
        </div>
    </div>
)

export default SignupForm;