import { connect } from 'react-redux';
import { receiveExpenses } from '../../actions/expenses_actions';
import Expenses from './expenses';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = ( dispatch, { location } ) => ({
  receiveExpenses: expenses => dispatch(receiveExpenses(expenses))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (Expenses);
