import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dahsboard from '../pages/Dahsboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashdash" component={Dahsboard} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
