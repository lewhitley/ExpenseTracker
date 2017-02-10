import React from 'react';
import { Link } from 'react-router';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.expense.description}
      </div>
    );
  }
}

export default ExpenseForm;
