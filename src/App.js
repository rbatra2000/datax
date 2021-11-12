import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
  BrowserRouter
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';

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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
