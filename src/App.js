import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import GeneradorQr from './pages/GeneradorQr';
import Alerts from './pages/Alerts';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard data={<GeneradorQr/>}/>
        </Route>
        <Route exact path="/alerts">
          <Dashboard data={<Alerts/>}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
