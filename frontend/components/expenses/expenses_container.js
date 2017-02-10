import { connect } from 'react-redux';
import { receiveExpenses } from '../../actions/expense_actions';
import Expenses from './expenses';

const mapStateToProps = ( {expenses} ) => ({
  expenses: expenses
});

const mapDispatchToProps = ( dispatch, { location } ) => ({
  receiveExpenses: expenses => dispatch(receiveExpenses(expenses))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (Expenses);
