import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Boundary from './error-page';
import LoadingPage from '../components/templates/loading-page';
import App from '../modules/app';

const RouterApp = withRouter(App);

const Routes = () => (
  <Router>
    <RouterApp>
      <Boundary>
        <Suspense fallback={<LoadingPage />}>
          <Route exact path="/" component={lazy(() => import('../modules/dashboard'))} />
          <Route path="/exchange" component={lazy(() => import('../modules/exchange'))} />
          <Route path="/transactions" component={lazy(() => import('../modules/transactions'))} />
        </Suspense>
      </Boundary>
    </RouterApp>
  </Router>
);

export default Routes;
