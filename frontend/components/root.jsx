import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { clearErrors } from '../actions/error_actions';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import ProfileContainer from './profile/profile_container';
import DeckShowContainer from './deck_show/deck_show_container';
import HomeContainer from './home/home_container';
import DeckTrainContainer from './deck_train/deck_train_container';
import SearchPage from './search_page/search_page';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replaceState) => {
    if (store.getState().session.currentUser.username) {
      replaceState("/profile");
    }
  };

  const _ensureLoggedIn = (nextState, replaceState) => {
    if (!store.getState().session.currentUser.username) {
      replaceState("/login");
    }
  };

  const _clearErrors = (nextState, replace) => {
    store.dispatch(clearErrors());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} onLeave={_clearErrors} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} onLeave={_clearErrors} />
          <Route path="/profile" component={ProfileContainer} onEnter={_ensureLoggedIn} onLeave={_clearErrors} />
          <Route path="/search" component={SearchPage} />
          <Route path="/decks/:deckId" component={DeckShowContainer} />
          <Route path="train/:deckId" component={DeckTrainContainer} onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
