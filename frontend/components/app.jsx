import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="page-container">
    <header>
      <nav className="header-left">
        <Link to="/" className="header-title">
          <div className="header-logo"></div>
          <h1><span>Card</span>Sharp</h1>
        </Link>
        <a href="#"><i className="fa fa-search"></i> Decks</a>
      </nav>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
