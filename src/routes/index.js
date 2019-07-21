import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Boundary from './error-page';
import AppShell from '../components/templates/app-shell';
import LoadingPage from '../components/templates/loading-page';

const Routes = () => (
  <Router>
    <AppShell>
      <Boundary>
        <Suspense fallback={<LoadingPage />}>
          <Route exact path="/" component={lazy(() => import('../modules/dashboard'))} />
          <Route path="/exchange" component={lazy(() => import('../modules/exchange'))} />
          <Route path="/transactions" component={lazy(() => import('../modules/transactions'))} />
        </Suspense>
      </Boundary>
    </AppShell>
  </Router>
);

export default Routes;
