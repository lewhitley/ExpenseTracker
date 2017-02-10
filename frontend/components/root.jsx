import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ReportsContainer from './reports/reports_container';
import ExpensesContainer from './expenses/expenses_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route path="/reports" component={ReportsContainer} />
      <Route path="/expenses" component={ExpensesContainer} />
    </Router>
  </Provider>
);

export default Root;
