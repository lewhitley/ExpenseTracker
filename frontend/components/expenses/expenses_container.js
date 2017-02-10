import { connect } from 'react-redux';
import {  } from '../../actions/expenses_actions';
import Expenses from './expenses';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = ( dispatch, { location } ) => {

};

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (Expenses);
