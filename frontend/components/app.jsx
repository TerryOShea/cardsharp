import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="page-container">
    <header>
      <Link to="/">
        <h1 className="header-title">CardSharp</h1>
      </Link>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
