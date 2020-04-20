import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Statistic, Row, Table } from 'antd';

const UnitComponent = (props) => (
    <div>
        <PageHeader
            title="Coronavirus Quarantine Patients Monitoring"
            subTitle="Current situation:">
            <Row>
                <Statistic
                    title="Status"
                    value="Updating"
                    style={{
                        margin: '0 32px',
                    }} />
                <Statistic
                    title="Units"
                    value={props.noOfUnits}
                    style={{
                        margin: '0 32px',
                    }} />
                <Statistic
                    title="Patients"
                    value={props.noOfPatients} />
            </Row>
        </PageHeader>
        <Table columns={columns} dataSource={props.data} />
    </div>
);

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => {
            return (
                <Link to={'/units/' + record.key + '/patients'} >{text}</Link>
            )
        },
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend']
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Number of patients',
        dataIndex: 'noOfPatients',
        key: 'noOfPatients',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.noOfPatients - b.noOfPatients
    },
];

export default UnitComponent;