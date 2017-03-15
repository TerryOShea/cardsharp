import React from 'react';
import { Link, withRouter } from 'react-router';

const Greeting = ({ currentUser, logout, router }) => {
  if (currentUser) {
    return (
      <nav className="header-nav">
        <Link to="/profile">{currentUser.username}</Link>
        <button onClick={() => logout().then(() => router.push("/"))}>Log Out</button>
      </nav>
    )
  } else {
    return (
      <nav className="header-nav">
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    )
  }
}

export default withRouter(Greeting);
