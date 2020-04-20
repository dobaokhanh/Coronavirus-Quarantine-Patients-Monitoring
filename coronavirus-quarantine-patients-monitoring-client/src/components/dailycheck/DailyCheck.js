import React, { Component } from 'react';

import { Modal, Button, Table } from 'antd';

class DailyCheck extends Component {

    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    cancelHandler = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { visible } = this.state;

        let data = [];
        let columns = [
            {
                title: 'Day',
                dataIndex: 'dayNo',
                key: 'dayNo',
                sorter: (a, b) => b.name.length - a.name.length,
                sortDirections: ['ascend']
            },
            {
                title: 'Temperature',
                dataIndex: 'temperature',
                key: 'temperature'
            },
            {
                title: 'Cough',
                dataIndex: 'cough',
                key: 'cough'
            },
            {
                title: 'Fever',
                dataIndex: 'fever',
                key: 'fever'
            },
            {
                title: 'Exhausted',
                dataIndex: 'exhausted',
                key: 'exhausted'
            },
            {
                title: 'Shortness Of Breath',
                dataIndex: 'shortnessOfBreath',
                key: 'shortnessOfBreath'
            }
        ];

        this.props.dailyChecks.map(dailyCheck => {
            data.push({
                dayNo: dailyCheck.dayNumber,
                temperature: dailyCheck.temperature,
                cough: (dailyCheck.cough) ? 'yes' : 'no',
                fever: (dailyCheck.fever) ? 'yes' : 'no',
                exhausted: (dailyCheck.exhausted) ? 'yes' : 'no',
                shortnessOfBreath: (dailyCheck.shortnessOfBreath) ? 'yes' : 'no',
            });
        });


        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Daily Check
                </Button>
                <Modal
                    visible={visible}
                    title="Daily Check"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            Submit
                        </Button>,
                    ]}
                >

                </Modal>
            </div>
        )
    }
}

export default DailyCheck;