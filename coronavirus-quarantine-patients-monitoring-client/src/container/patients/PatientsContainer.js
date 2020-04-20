import React, { Component } from 'react';
import { connect } from 'react-redux';

import PatientComponent from '../../components/patient/PatientComponent';
import * as actions from '../../store/actions/index';

class PatientsContainer extends Component {

    componentDidMount() {
        this.props.onGetAllPatients(this.props.match.params.unitId);
        this.props.onGetUnitById(this.props.match.params.unitId);
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
                title: 'phone',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'delete',
                render: (text, record) => (
                    <span>
                        <a style={{ marginRight: 16 }}>Daily Check</a>
                        <a>Delete</a>
                    </span>
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
                columns={columns} />
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
        onGetUnitById: (unitId) => dispatch(actions.getUnitById(unitId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsContainer);