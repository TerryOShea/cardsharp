import { RECEIVE_DECKS, RECEIVE_DECK, REMOVE_DECK, REMOVE_DECKS } from '../actions/deck_actions';
import merge from 'lodash/merge';

const DecksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DECKS:
      return merge({}, action.decks);
    case RECEIVE_DECK:
      return merge({}, action.decks, { [action.deck.id]: action.deck });
    case REMOVE_DECK:
      const newState = merge({}, state);
      delete newState[action.deck.id];
      return newState;
    case REMOVE_DECKS:
      return {};
    default:
      return state;
  }
};

export default DecksReducer;
