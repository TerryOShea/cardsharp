import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: {
    subscribed_decks: []
  }
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case REMOVE_CURRENT_USER:
      return merge({}, _nullUser);
    case RECEIVE_DECK:
      const newState = merge({}, state);
      if (state.currentUser.id !== action.deck.author_id) {
        newState.currentUser.subscribed_decks.push(action.deck.id);
      }
      return newState;
    case REMOVE_DECK:
      const newerState = merge({}, state);
      if (state.currentUser.id !== action.deck.author_id) {
        const decks = newerState.currentUser.subscribed_decks;
        decks.splice(decks.indexOf(action.deck.id), 1);
      }
      return newerState;
    default:
      return state;
  }
}

export default SessionReducer;
