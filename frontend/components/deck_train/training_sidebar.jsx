import React from 'react';
import { Link } from 'react-router';

const PROGRESS_HEIGHT = 300;

const TrainingSidebar = ({ deckTitle, numCards, numSeen }) => {
  const barHeight = Math.ceil((numSeen/numCards) * PROGRESS_HEIGHT);
  const barStyle = { height: barHeight };

  return (
    <div className="training-sidebar">
      <nav className="main-nav">
        <Link to="/"><div className="header-logo"></div></Link>
        <Link to="/"><i className="fa fa-search"></i></Link>
      </nav>
      <nav className="training-nav">
        <p className="training-nav-title">Studying: <span>{deckTitle}</span></p>
        <Link to="/profile"><button type="button">Done</button></Link>
        <div className="training-progress">
          <div className="progress-bar" style={barStyle}></div>
        </div>
      </nav>
    </div>
  );
};

export default TrainingSidebar;
