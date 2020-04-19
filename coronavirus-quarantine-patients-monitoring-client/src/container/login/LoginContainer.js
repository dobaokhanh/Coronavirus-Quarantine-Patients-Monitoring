import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../components/login/LoginForm';
import { notification, Spin } from 'antd';
import * as actions from '../../store/actions/index';

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

    handleSubmit = () => {
        const loginRequest = {
            usernameOrEmail: this.state.usernameOrEmail.value,
            password: this.state.password.value
        };
        this.props.onLogin(loginRequest);
        if (this.props.error) {
            notification.error(this.props.error);
        }

    }

    render() {

        let loginForm = (
            <LoginForm
                changed={this.inputChangeHandler}
                submitted={this.handleSubmit}
            />
        );
        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        if (this.props.loading) {
            loginForm = <Spin />
        }

        return (
            <div>
                {authRedirect}
                {loginForm}
            </div>
        )
    }
};


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (loginRequest) => dispatch(actions.login(loginRequest))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);