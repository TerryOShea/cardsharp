import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import ProfileContainer from './profile/profile_container';
import DeckContainer from './deck/deck_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replaceState) => {
    if (store.getState().session.currentUser) {
      replaceState("/");
    }
  };

  const _ensureLoggedIn = (nextState, replaceState) => {
    if (!store.getState().session.currentUser) {
      replaceState("/login");
    }
  };

  const _clearErrors = (nextState, replace) => {
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} onLeave={_clearErrors} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} onLeave={_clearErrors} />
          <Route path="/profile" component={ProfileContainer} onEnter={_ensureLoggedIn} onLeave={_clearErrors} />
          <Route path="/decks/:deckId" component={DeckContainer} />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
