import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ExpenseMiddleware from './expense_middleware';
import ReportMiddleware from './report_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ExpenseMiddleware,
  ReportMiddleware
);

export default RootMiddleware;
