import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ExpenseReducer from './expense_reducer';
import ReportReducer from './report_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  expenses: ExpenseReducer,
  report: ReportReducer
});

export default RootReducer;
