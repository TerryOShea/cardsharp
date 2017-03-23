import React from 'react';
import { Link } from 'react-router';

const Home = props => (
  <section className="home-container">
    <section className="home-image"></section>
    <section className="home-info">
      <h1>Learn anything.</h1>
      <section className="home-btns">
        <Link to="/search">
          <button type="button">
            <i className="fa fa-caret-left"></i> &nbsp;Browse decks
          </button>
        </Link>

        <Link to="/signup">
          <button type="button">
            Get started &nbsp;<i className="fa fa-caret-right"></i>
          </button>
        </Link>
      </section>
    </section>
  </section>
);

export default Home;
