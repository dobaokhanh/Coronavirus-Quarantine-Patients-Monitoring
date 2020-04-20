import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import UnitComponent from '../../components/unit/UnitComponent';

class UnitsContainer extends Component {

    componentDidMount() {
        this.props.onGetAllUnits();
    }

    render() {
        let noOfPatients = 0;
        let data = [];
        if (this.props.units) {
            this.props.units.map(unit => (
                noOfPatients += unit.noOfPatients
            ));
            this.props.units.map(unit => (
                data.push({
                    key: unit.id,
                    name: unit.name,
                    address: unit.address,
                    noOfPatients: unit.noOfPatients
                })
            ));
        }

        let unitComponent = (
            <UnitComponent
                units={this.props.units}
                noOfUnits={this.props.units.length}
                noOfPatients={noOfPatients}
                data={data} />
        );

        return (
            <div>
                {unitComponent}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        units: state.units.units
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllUnits: () => dispatch(actions.getAllUnits())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnitsContainer);