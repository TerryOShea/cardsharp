import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="page-container">
    <header>
      <Link to="/" className="header-title">
        <img src="/assets/favicon.png" className="header-logo" />
        <h1><span>Card</span>Sharp</h1>
      </Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
