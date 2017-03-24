import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import ErrorBoxContainer from './errors/error_box_container';

const App = ({ children, location }) => {
  const hideHeader = location.pathname.match(/^\/train\/\d+$/);

  const onSearch = location.pathname.match(/^\/search$/);
  const headerClass = onSearch ? "search-header" : "";

  const header = hideHeader ? "" : (
    <header className={headerClass}>
      <nav className="header-left">
        <Link to="/" className="header-title">
          <div className="header-logo"></div>
          <h1><span>Card</span>Sharp</h1>
        </Link>
        <Link to="/search"><i className="fa fa-search"></i> Decks</Link>
      </nav>
      <GreetingContainer />
    </header>
  );

  return (
    <div className="page-container">
      {header}
      <ErrorBoxContainer />
      {children}
    </div>
  );
}

export default App;
