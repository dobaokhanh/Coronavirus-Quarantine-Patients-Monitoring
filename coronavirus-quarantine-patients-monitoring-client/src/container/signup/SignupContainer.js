import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignupForm from '../../components/signup/SignupForm';

class SignupContainer extends Component {

    render() {

        let signupRedirectPath = null;
        if (this.props.authRedirectPath) {
            signupRedirectPath = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div>
                {signupRedirectPath}
                <SignupForm />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath,
        notification: state.auth.notification,
        error: state.auth.error
    };
};


export default connect(mapStateToProps)(SignupContainer);