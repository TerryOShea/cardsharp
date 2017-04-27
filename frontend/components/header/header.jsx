import React from 'react';
import DropdownContainer from '../dropdown/dropdown_container';
import { Link, withRouter } from 'react-router';

class Header extends React.Component {
  constructor() {
    super();
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.state = {
      dropdownActive: false
    };
  }

  toggleDropdown() {
    this.setState({ dropdownActive: !this.state.dropdownActive });
  }

  closeDropdown() {
    this.setState({ dropdownActive: false });
  }

  render() {
    const { currentUser, logout, router, location } = this.props;
    const { dropdownActive } = this.state;

    const onSearch = location.pathname.match(/^\/search$/);
    const headerClass = onSearch ? "search-header" : "";
    const headerStyle = dropdownActive ? { height: onSearch ? 245 : 250 } : { height: 60 };

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
      <header className={headerClass} style={headerStyle}>
        <section className="header-main">
          <Link to="/" className="header-title-box" onClick={this.closeDropdown}>
            <div className="header-logo"></div>
            <h1 className="header-title"><span>Card</span>Sharp</h1>
          </Link>
          <nav className="header-right">
            <Link to="/search"><i className="fa fa-search"></i> Decks</Link>
            {greeting}
          </nav>
          <button className="header-dropdown-btn" onClick={this.toggleDropdown}>
            <i className="fa fa-bars"></i>
          </button>
        </section>
        <DropdownContainer location={location} toggle={this.toggleDropdown} />
      </header>
    );
  }
}

export default withRouter(Header);
