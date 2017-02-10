import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ExpenseReducer from './expense_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  expenses: ExpenseReducer
});

export default RootReducer;
