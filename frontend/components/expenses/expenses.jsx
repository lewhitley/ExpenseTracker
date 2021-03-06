import React from 'react';
import { Link } from 'react-router';
import { expenseArray } from '../../reducers/selectors/expense_selectors';

class Expenses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <ul className='expense-index'>
          {expenseArray(this.props.expenses).map( (expense, idx) => (
            <Link to={'/expenses/'+expense.id} key={idx}>
              <li className='expense-item'>
                { expense.amount }
                { expense.description }
              </li>
            </Link>
          ))}
        </ul>
        <Link to={'/new-expense'}>Add Expense</Link>
      </section>
    );
  }
}

export default Expenses;
