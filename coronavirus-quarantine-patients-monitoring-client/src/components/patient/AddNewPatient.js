import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form, Input } from 'antd';

import {
    NAME_MAX_LENGTH, NAME_MIN_LENGTH,
    ADDRESS_MAX_LENGTH, ADDRESS_MIN_LENGTH,
    EMAIL_MAX_LENGTH, PHONE_NUMBER_MAX_LENGTH,
    PHONE_NUMBER_MIN_LENGTH
} from '../../utils/Constants';
import { addNewPatient } from '../../store/actions/index';

const dateFormat = 'DD/MM/YYYY';

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


class AddNewPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            name: {
                value: ''
            },
            dob: {
                value: ''
            },
            address: {
                value: ''
            },
            email: {
                value: ''
            },
            phone: {
                value: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
    }

    handleInputChange = (event, validationFun) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    isFormInvalid = () => {
        return !(this.state.name.validateStatus === 'success' &&
            this.state.dob.validateStatus === 'success' &&
            this.state.address.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.phone.validateStatus === 'success'
        );
    }

    showModal = () => {
        this.setState({
            ...this.state,
            visible: true,
        });
    };

    cancelHandler = () => {
        this.setState({
            ...this.state,
            visible: false
        });
    };

    addNewPatientHandler = () => {
        const patientRequest = {
            address: this.state.address.value,
            dob: this.state.dob.value,
            email: this.state.email.value,
            name: this.state.name.value,
            phone: this.state.phone.value,
            unitId: this.props.unitId
        };
        this.props.onAddNewPatient(this.props.unitId, patientRequest);
        this.setState({
            ...this.state,
            visible: false
        })
    }

    render() {
        return (
            <div>
                <Button
                    type='primary'
                    size='large'
                    shape='round'
                    onClick={this.showModal}
                    style={{
                        margin: '0 0 18px'
                    }}>Add New Patient</Button>
                <Modal
                    visible={this.state.visible}
                    title="Add New Patient"
                    onCancel={this.cancelHandler}
                    footer={null}
                >

                    <Form
                        {...formItemLayout}
                        onFinish={this.addNewPatientHandler}
                        className="signup-form">
                        <Form.Item
                            label="Full Name"
                            validateStatus={this.state.name.validateStatus}
                            help={this.state.name.errorMsg}>
                            <Input
                                size="large"
                                name="name"
                                autoComplete="off"
                                placeholder="Full name"
                                value={this.state.name.value}
                                onChange={(event) => this.handleInputChange(event, this.validateName)} />
                        </Form.Item>
                        <Form.Item label="Date of birth"
                            validateStatus={this.state.dob.validateStatus}
                            help={this.state.dob.errorMsg}>
                            <Input
                                size="large"
                                name="dob"
                                type='date'
                                format={dateFormat}
                                autoComplete="off"
                                placeholder="Date of birth"
                                value={this.state.dob.value}
                                onChange={(event) => this.handleInputChange(event, this.validateDob)} />
                        </Form.Item>
                        <Form.Item
                            label="Address"
                            validateStatus={this.state.address.validateStatus}
                            help={this.state.address.errorMsg}>
                            <Input
                                size="large"
                                name="address"
                                autoComplete="off"
                                placeholder="Address"
                                value={this.state.address.value}
                                onChange={(event) => this.handleInputChange(event, this.validateAddress)} />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            validateStatus={this.state.email.validateStatus}
                            help={this.state.email.errorMsg}>
                            <Input
                                size="large"
                                name="email"
                                type="email"
                                autoComplete="off"
                                placeholder="Your email"
                                value={this.state.email.value}
                                onBlur={this.validateEmailAvailability}
                                onChange={(event) => this.handleInputChange(event, this.validateEmail)} />
                        </Form.Item>
                        <Form.Item
                            label="Phone number"
                            validateStatus={this.state.phone.validateStatus}
                            help={this.state.phone.errorMsg}>
                            <Input
                                size="large"
                                name="phone"
                                autoComplete="off"
                                placeholder="Phone number"
                                value={this.state.phone.value}
                                onChange={(event) => this.handleInputChange(event, this.validatePhoneNumber)} />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                key="back"
                                onClick={this.cancelHandler}
                                size='large'
                                style={{
                                    float: 'right'
                                }}>
                                Return
                            </Button>,
                            <Button type="primary"
                                htmlType="submit"
                                size="large"
                                disabled={this.isFormInvalid()}
                                style={{
                                    float: 'right'
                                }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }

    validateName = (name) => {
        if (name.length < NAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
            }
        } else if (name.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateEmail = (email) => {
        if (!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email may not be empty'
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if (!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email not valid'
            }
        }

        if (email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
            }
        } else if (email.length)

        return {
            validateStatus: 'success',
            errorMsg: null,
        }
    }

    validateDob = (dob) => {
        if (dob.length === 0) {
            return {
                validateStatus: 'error',
                errorMsg: 'Please select date of birth'
            }
        }
        else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            }
        }
    }

    validateAddress = (address) => {
        if (address.length < ADDRESS_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Address is too short (Minimum ${ADDRESS_MIN_LENGTH} characters needed.)`
            }
        } else if (address.length > ADDRESS_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Address is too long (Maximum ${ADDRESS_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validatePhoneNumber = (phone) => {
        if (!phone) {
            return {
                validateStatus: 'error',
                errorMsg: 'Phone number may not be empty'
            }
        }

        const PHONE_NUMBER_REGEX = RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$');
        if (!PHONE_NUMBER_REGEX.test(phone)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Phone number not valid'
            }
        }

        if (phone.length > PHONE_NUMBER_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Phone number is too long (Maximum ${PHONE_NUMBER_MAX_LENGTH} characters allowed)`
            }
        } else if (phone.length < PHONE_NUMBER_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Phone number is too short (Minimum ${PHONE_NUMBER_MIN_LENGTH} characters allowed)`
            }
        }

        return {
            validateStatus: 'success',
            errorMsg: null,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddNewPatient: (unitId, patientRequest) => dispatch(addNewPatient(unitId, patientRequest))
    };
};

export default connect(null, mapDispatchToProps)(AddNewPatient);