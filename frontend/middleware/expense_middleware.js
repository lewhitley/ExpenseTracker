import { receiveExpenses, receiveAdminExpenses, CREATE_EXPENSE,
  UPDATE_EXPENSE, DELETE_EXPENSE, FETCH_EXPENSES,
  FETCH_ADMIN_EXPENSES } from '../actions/expense_actions';
import { createExpense, updateExpense, deleteExpense, fetchExpenses,
  adminFetchExpenses } from '../util/expense_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = expenses => dispatch(receiveExpenses(expenses));

  switch(action.type){
    case CREATE_EXPENSE:
      createExpense(action.expense, successCallback);
      return next(action);
    case UPDATE_EXPENSE:
      updateExpense(action.expense, successCallback);
      return next(action);
    case DELETE_EXPENSE:
      deleteExpense(action.id, successCallback);
      return next(action);
    case FETCH_EXPENSES:
      fetchExpenses(successCallback);
      return next(action);
    case FETCH_ADMIN_EXPENSES:
      adminFetchExpenses(expenses => dispatch(receiveAdminExpenses(expenses)));
      return next(action);
    default:
      return next(action);
  }
};
