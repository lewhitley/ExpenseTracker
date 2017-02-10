import React from 'react';
import { expenseArray } from '../../reducers/selectors/expense_selectors';

class ExpenseAdmin extends React.Component {
  constructor(props) {
    super(props);
  }

  loaded() {
    return (
      <section>
        All Expenses
        <ul>
          {expenseArray(this.props.expenses).map( (expense, idx) => (
          <li className='expense-item'>
            { expense.amount }
            { expense.description }
          </li>
        ))}
        </ul>
      </section>
    );
  }

  render() {
    return (this.props.expenses ? this.loaded() : <div></div>);
  }
}

export default ExpenseAdmin;
