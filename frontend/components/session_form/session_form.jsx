import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      admin: null
    };
    this.greeting = this.greeting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  setAdmin(e) {
    this.setState({
      admin: e.target.value
    });
  }

  handleErrors() {
    if (this.errors){
      return (
        <ul>
          { this.props.errors.map( error => <li>{error}</li> ) }
        </ul>
      );
    }
  }

  greeting() {
    return (
      <div>
        Welcome to ExpenseTracker! Please { this.props.formType } below.
        <br />
        Otherwise, { this.linked() }
      </div>
    );
  }

  linked() {
    if (this.props.formType === 'login'){
      return (<Link to="/signup">sign up</Link>);
    } else {
      return (<Link to="/login">login</Link>);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  signupOnly() {
    if (this.props.formType === "signup") {
      return (
        <div onChange={this.setAdmin.bind(this)}>
          Admin User?
          <br />
          <label>
            <input type="radio" value="true" name="admin"/>
            Yes
          </label>
          <br />
          <label>
            <input type="radio" value="false" name="admin"/>
            No
          </label>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        { this.greeting() }
        <form>
          <div>
            { this.handleErrors() }
          </div>
          <input type='text' value={this.state.username}
            placeholder='Username'
            onChange={this.update("username")}></input>
          <br />
          <input type='password' value={this.state.password}
            placeholder='Password'
            onChange={this.update("password")}></input>
          <br />
          { this.signupOnly() }
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
