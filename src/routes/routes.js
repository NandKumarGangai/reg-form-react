import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from '../components/RegisterForm';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={() => <RegistrationForm />} />
        </Switch>
    </Router>
  )
}
export default Routes;