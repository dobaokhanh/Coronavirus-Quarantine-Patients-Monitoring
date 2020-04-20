import React from 'react';

import { PageHeader, Row, Statistic, Table } from 'antd';

const PatientComponent = (props) => (
    <div>
        <PageHeader
            title="Coronavirus Quarantine Patients Monitoring"
            onBack={() => window.history.back()}
            subTitle="Current situation:">
            <Row>
                <Statistic
                    title="Status"
                    value="Updating"
                    style={{
                        margin: '0 32px',
                    }} />
                <Statistic
                    title="Unit"
                    value={props.unitName}
                    style={{
                        margin: '0 32px',
                    }} />
                <Statistic
                    title="Patients"
                    value={props.noOfPatients} />
            </Row>
        </PageHeader>
        <Table columns={props.columns} dataSource={props.data} />
    </div>
);

export default PatientComponent;