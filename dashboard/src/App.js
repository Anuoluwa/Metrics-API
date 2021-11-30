import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import store from './redux/store';

const Dashboard =  lazy(() => import('./pages/dashboard'));
const Metrics =  lazy(() => import('./pages/metrics'));
const Charts =  lazy(() => import('./pages/charts'));
const AverageMetrics = lazy(() => import('./pages/averages'));

const App = () => {

  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* <Route exact path="/" component={Login}/> */}
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/metrics" component={Metrics}/>
        <Route exact path="/average-metrics" component={AverageMetrics}/>
      </Switch>
    </Suspense>
  )
}

export default App;
