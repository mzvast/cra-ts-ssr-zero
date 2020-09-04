import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Deep from './Deep'

import './App.css';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/deep" component={Deep} />
  </Switch>
);

export default App;
