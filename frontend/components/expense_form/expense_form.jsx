import React from 'react';
import { Link } from 'react-router';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      description: ""
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  loaded() {
    return (
      <form>
        <input type='text' value={this.props.expense.amount}
          placeholder='Amount'
          onChange={this.update("amount")} />
        <input type='text' value={this.props.expense.description}
          placeholder='Description'
          onChange={this.update("description")} />
      </form>
    );
  }

  render() {
    return (this.props.expense ? this.loaded() : <div></div>);
  }
}

export default ExpenseForm;
