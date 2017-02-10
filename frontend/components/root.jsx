import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
// import ReportsContainer from './reports/reports_container';
import ExpensesContainer from './expenses/expenses_container';
import ReportContainer from './report/report_container';
import ExpenseFormContainer from './expense_form/expense_form_container';
import ExpenseAdminContainer from './expense_admin/expense_admin_container';

import { fetchExpenses, fetchAdminExpenses } from '../actions/expense_actions';

const Root = ({ store }) => {
  const fetchExpensesOnEnter = () => {
    _redirectIfLoggedOut();
    if (!store.expenses) {
      store.dispatch(fetchExpenses());
    }
  };

  const fetchAdminExpensesOnEnter = () => {
    _redirectIfLoggedOut();
    store.dispatch(fetchAdminExpenses());
  };

  const _redirectIfLoggedOut = () => {
    if (!store.getState().session.currentUser) {
      hashHistory.replace("/");
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
        <Route path="/" component={App} >
          <Route path="/expenses" component={ExpensesContainer}
            onEnter={fetchExpensesOnEnter} />
          <Route path="/reports" component={ReportContainer}
            onEnter={_redirectIfLoggedOut} />
          <Route path="/expenses/:expenseId" component={ExpenseFormContainer}
            onEnter={fetchExpensesOnEnter} />
          <Route path="/new-expense" component={ExpenseFormContainer}
            onEnter={_redirectIfLoggedOut} />
          <Route path="/admin-expenses" component={ExpenseAdminContainer}
            onEnter={fetchAdminExpensesOnEnter} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <Route path="/reports" component={ReportsContainer} />
