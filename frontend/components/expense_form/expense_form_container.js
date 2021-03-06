import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { createExpense, updateExpense, deleteExpense } from '../../actions/expense_actions';
import ExpenseForm from './expense_form';

const mapStateToProps = ( state, ownProps ) => {
  if (ownProps.routeParams.expenseId && state.expenses) {
    return ({
      expense: state.expenses[ownProps.routeParams.expenseId],
      currentUser: state.session.currentUser
    });
  } else {
    return {formType: "new", currentUser: state.session.currentUser};
  }
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  createExpense: expense => dispatch(createExpense(expense)),
  updateExpense: expense => dispatch(updateExpense(expense)),
  deleteExpense: id => dispatch(deleteExpense(id)),
  redirectToExpenses: () => {
    hashHistory.replace("/expenses");
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (ExpenseForm);
