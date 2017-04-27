import React from 'react';
import { Link, withRouter } from 'react-router';

const Dropdown = ({ currentUser, logout, router, location, toggle }) => {
  const content = [<Link to="/search"><i className="fa fa-search"></i> Decks</Link>];
  if (currentUser.username) {
    content.push(<Link to="/profile">{currentUser.username}</Link>);
    content.push(<button onClick={() => logout().then(() => router.push("/"))}>Log Out</button>);
  } else {
    content.push(<Link to="/login">Log In</Link>);
    content.push(<Link to="/signup"><button type="button">Sign Up</button></Link>);
  }

  const links = content.map((c, i) => (
    <li key={i} onClick={toggle}>{c}</li>
  ));

  return (
    <ul className="dropdown">
      {links}
    </ul>
  );
}

export default withRouter(Dropdown);
