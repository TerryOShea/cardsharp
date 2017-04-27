import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link, withRouter } from 'react-router';

const Header = ({ currentUser, logout, router, location }) => {
  const onSearch = location.pathname.match(/^\/search$/);
  const headerClass = onSearch ? "search-header" : "";
  let greeting;

  if (currentUser.username) {
    greeting = (
      <nav className="header-greeting">
        <Link to="/profile">{currentUser.username}</Link>
        <button onClick={() => logout().then(() => router.push("/"))}>Log Out</button>
      </nav>
    );
  } else {
    greeting = (
      <nav className="header-greeting">
        <Link to="/login">Log In</Link>
        <Link to="/signup"><button type="button">Sign Up</button></Link>
      </nav>
    );
  }

  return (
    <header className={headerClass}>
      <nav className="header-left">
        <Link to="/" className="header-title-box">
          <div className="header-logo"></div>
          <h1 className="header-title"><span>Card</span>Sharp</h1>
        </Link>
        <Link to="/search"><i className="fa fa-search"></i> Decks</Link>
      </nav>
      {greeting}
    </header>
  );
}

export default withRouter(Header);
