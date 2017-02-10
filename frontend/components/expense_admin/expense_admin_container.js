import { connect } from 'react-redux';
import ExpenseAdmin from './expense_admin';

const mapStateToProps = state => {
  return ({expenses: state.expenses});
};

const mapDispatchToProps = ( dispatch, ownProps ) => ({
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (ExpenseAdmin);
