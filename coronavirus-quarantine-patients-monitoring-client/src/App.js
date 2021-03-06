import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import LoginContainer from './container/login/LoginContainer';
import SignupContainer from './container/signup/SignupContainer';
import UnitsContainer from './container/units/UnitsContainer';
import PatientsContainer from './container/patients/PatientsContainer';
import './App.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/units" component={UnitsContainer} />
        <Route exact path="/units/:unitId/patients" component={PatientsContainer} />
      </Switch>
    );

    return (
      <div>
        {routes}
      </div>
    )
  }
}

export default withRouter(App);
