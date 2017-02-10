import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<header>
    <span className="header-name">Hi, {currentUser.username}!</span>
    <Link to="/reports" activeClassName="current">Reports</Link>
    <Link to="/expenses" activeClassName="current">Expenses</Link>
    <button className="header-button" onClick={logout}>Log Out</button>
	</header>
);



const Home = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Home;