import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { Redirect } from 'react-router-dom';

import SignupForm from '../../components/signup/SignupForm';
import * as actions from '../../store/actions/index';

class SignupContainer extends Component {

    inputChangeHandler = (event) => {
        const inputName = event.target.name;

        this.setState({
            [inputName]: {
                value: event.target.value,
            }
        });
    };

    submitHandler = (values) => {
        const signupRequest = {
            name: values.name,
            email: values.email,
            username: values.username,
            password: values.password
        };

        this.props.onSignup(signupRequest);

        if (this.props.error) {
            notification.error(this.props.error);
        }

        if (this.props.notification) {
            notification.success(this.props.notification);
        }
    }

    render() {

        let signupForm = (
            <SignupForm
                changed={this.inputChangeHandler}
                submitted={this.submitHandler}
            />
        )

        let signupRedirectPath = null;
        if (this.props.authRedirectPath) {
            signupRedirectPath = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div>
                {signupRedirectPath}
                {signupForm}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        notification: state.auth.notification,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (signupRequest) => dispatch(actions.signup(signupRequest))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);