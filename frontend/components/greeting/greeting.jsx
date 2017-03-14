import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <nav>
        <h3>{currentUser.username}</h3>
        <button onClick={logout}>Log Out</button>
      </nav>
    )
  } else {
    return (
      <nav>
        <Link to="/login" activeClassName="current">Log In</Link>
        <Link to="/signup" activeClassName="current">Sign Up</Link>
      </nav>
    )
  }
}

export default Greeting;
