import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ExpenseMiddleware from './expense_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ExpenseMiddleware
);

export default RootMiddleware;
