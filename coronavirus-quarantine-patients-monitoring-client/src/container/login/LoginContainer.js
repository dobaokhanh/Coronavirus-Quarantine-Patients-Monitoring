import React, { Component } from 'react';

import LoginForm from '../../components/login/LoginForm';

class LoginContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usernameOrEmail: {
                value: ''
            },
            password: {
                value: ''
            }
        }
    }

    inputChangeHandler = (event) => {
        const inputName = event.target.name;

        this.setState({
            [inputName]: {
                value: event.target.value
            }
        });
    }

    render() {
        let loginForm = (
            <LoginForm
                usernameOrEmail={this.state.usernameOrEmail.value}
                password={this.state.password.value}
                changed={this.inputChangeHandler} />
        )

        return (
            <div>
                {loginForm}
            </div>
        )
    }
};

export default LoginContainer;