import React, { Component } from 'react';

import SignupForm from '../../components/signup/SignupForm';

class SignupContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            username: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        }
    }

    inputChangeHandler = (event, validationFunc) => {
        const inputName = event.target.name;

        this.setState({
            [inputName] : {
                value: event.target.value,
                ...validationFunc(event.target.value)
            }
        });
    };

    render() {
        let signupForm = (
            <SignupForm
                name={this.state.name}
                username={this.state.username}
                email={this.state.email}
                password={this.state.password}
                changed={this.inputChangeHandler} />
        )

        return (
            <div>
                {signupForm}
            </div>
        )
    }
};

export default SignupContainer;