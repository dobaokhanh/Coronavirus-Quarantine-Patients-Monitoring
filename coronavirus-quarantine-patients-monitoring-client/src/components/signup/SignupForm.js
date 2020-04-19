import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import { validateName} from '../../utils/Validators';
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
                onFinish={props.handleSubmit}
                className="signup-form">
                <Form.Item
                    label="Full Name"
                    validateStatus={props.name.validateStatus}
                    help={props.name.errorMsg}>
                    <Input
                        size="large"
                        name="name"
                        autoComplete="off"
                        placeholder="Your full name"
                        onChange={(event) => props.changed(event, validateName)} />
                </Form.Item>
                <Form.Item label="Username"
                    hasFeedback
                    validateStatus={props.username.validateStatus}
                    help={props.username.errorMsg}>
                    <Input
                        size="large"
                        name="username"
                        autoComplete="off"
                        placeholder="A unique username"
                        value={props.username.value}
                        //onBlur={this.validateUsernameAvailability}
                        onChange={props.changed} />
                </Form.Item>
                <Form.Item
                    label="Email"
                    hasFeedback
                    validateStatus={props.email.validateStatus}
                    help={props.email.errorMsg}>
                    <Input
                        size="large"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Your email"
                        value={props.email.value}
                        // onBlur={this.validateEmailAvailability}
                        onChange={props.changed} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    validateStatus={props.password.validateStatus}
                    help={props.password.errorMsg}>
                    <Input
                        size="large"
                        name="password"
                        type="password"
                        autoComplete="off"
                        placeholder="A password between 6 to 20 characters"
                        value={props.password.value}
                        onChange={props.changed} />
                </Form.Item>
                <Form.Item
                    {...tailFormItemLayout}>
                    <Button type="primary"
                        htmlType="submit"
                        size="large"
                        className="signup-form-button"
                        disabled={props.isFormInvalid}>Sign up</Button>
                Already registed? <Link to="/login">Login now!</Link>
                </Form.Item>
            </Form>
        </div>
    </div>
)

export default SignupForm;