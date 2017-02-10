import { RECEIVE_EXPENSES } from '../actions/expense_actions';

export default (state = [], action) =>{
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};
