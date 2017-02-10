import { connect } from 'react-redux';
import { createExpense, updateExpense, deleteExpense } from '../../actions/expense_actions';
import ExpenseForm from './expense_form';

const mapStateToProps = ( {expenses}, ownProps ) => {
  if (ownProps.routeParams.expenseId) {
    return {expense: expenses[ownProps.routeParams.expenseId]};
  } else {
    return {formType: "new"};
  }
};

const mapDispatchToProps = ( dispatch ) => ({
  createExpense: expense => dispatch(createExpense(expense)),
  updateExpense: expense => dispatch(updateExpense(expense)),
  deleteExpense: id => dispatch(deleteExpense(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (ExpenseForm);
