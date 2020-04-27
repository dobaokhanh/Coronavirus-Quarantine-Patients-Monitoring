import React from 'react';

import { PageHeader, Row, Statistic, Table } from 'antd';
import AddNewPatient from './AddNewPatient';

const PatientComponent = (props) => (
    <div>
        <PageHeader
            title="Corona Virus Quarantine Patients Monitoring"
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
       <AddNewPatient unitId={props.unitId}/>
        <Table columns={props.columns} dataSource={props.data} />
    </div>
);

export default PatientComponent;