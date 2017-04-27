import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import ErrorBoxContainer from './errors/error_box_container';

const App = ({ children, location }) => {
  const hideHeader = location.pathname.match(/^\/train\/\d+$/);
  const header = hideHeader ? "" : (<HeaderContainer location={location} />);

  return (
    <div className="page-container">
      {header}
      <ErrorBoxContainer />
      {children}
    </div>
  );
}

export default App;
