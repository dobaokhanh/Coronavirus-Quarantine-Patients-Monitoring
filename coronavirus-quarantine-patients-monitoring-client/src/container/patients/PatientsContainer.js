import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Popconfirm } from 'antd';

import PatientComponent from '../../components/patient/PatientComponent';
import * as actions from '../../store/actions/index';

class PatientsContainer extends Component {

    componentDidMount() {
        this.props.onGetAllPatients(this.props.match.params.unitId);
        this.props.onGetUnitById(this.props.match.params.unitId);
    }

    deletePatientHandler = (record) => {
        const patientRequest = {
            address: record.address,
            dob: record.dob,
            email: record.email,
            name: record.name,
            phone: record.phone,
            unitId: this.props.match.params.unitId
        }
        this.props.onDeletePatient(patientRequest.unitId, patientRequest);
    }

    render() {
        let data = [];
        let columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a.name.length - b.name.length,
                sortDirections: ['descend']
            },
            {
                title: 'Date of birth',
                dataIndex: 'dob',
                key: 'dob'
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'delete',
                render: (text, record) => (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.deletePatientHandler(record)}>
                        <button>Delete</button>
                    </Popconfirm>
                )

            },
        ];
        if (this.props.patients) {
            this.props.patients.map(patient => (
                data.push({
                    key: patient.id,
                    name: patient.name,
                    dob: patient.dob,
                    address: patient.address,
                    email: patient.email,
                    phone: patient.phone
                })
            ));
        }

        let unitName = '';

        if (this.props.unit) {
            unitName = this.props.unit.name
        }

        let patientComponent = (
            <PatientComponent
                noOfPatients={this.props.patients.length}
                unitName={unitName}
                data={data}
                columns={columns}
                unitId={this.props.match.params.unitId}
            />
        );

        return (
            <div>
                {patientComponent}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        unit: state.units.currentUnit,
        patients: state.patients.patients
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllPatients: (unitId) => dispatch(actions.getAllPatients(unitId)),
        onGetUnitById: (unitId) => dispatch(actions.getUnitById(unitId)),
        onDeletePatient: (unitId, patientRequest) => dispatch(actions.deletePatient(unitId, patientRequest))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsContainer);