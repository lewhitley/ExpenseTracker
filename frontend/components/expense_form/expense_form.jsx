import React from 'react';
import { Link } from 'react-router';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: props.expense ? props.expense.amount : "",
      description: props.expense ? props.expense.description : "",
      id: props.expense ? props.expense.id : null
    };

    this.typeHeading = this.typeHeading.bind(this);
    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  typeHeading() {
    if (this.props.expense) {
      return <div>Update this expense</div>;
    } else {
      return <div>Please enter a new expense</div>;
    }
  }

  delete() {
    this.props.deleteExpense(this.props.expense.id);
  }

  deleteButton() {
    if (!this.props.formType) {
      return <button onClick={this.delete}>Delete</button>;
    }
  }

  submit(e) {
    e.preventDefault();

    if (this.props.formType) {
      this.props.createExpense(this.state);
    } else {
      this.props.updateExpense(this.state);
    }
  }

  loaded() {
    return (
      <form>
        { this.typeHeading() }
        <input type='text' placeholder='Amount'
          value={this.state.amount}
          onChange={this.update("amount")} />
        <br />
        <input type='text' placeholder='Description'
          value={this.state.description}
          onChange={this.update("description")} />
        { this.deleteButton() }
        <button onClick={this.submit}>Submit</button>
      </form>
    );
  }

  render() {
    return (this.props.expense || this.props.formType ? this.loaded() : <div></div>);
  }
}

export default ExpenseForm;
