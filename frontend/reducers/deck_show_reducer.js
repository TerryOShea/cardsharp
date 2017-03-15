import { RECEIVE_DECK_SHOW } from '../actions/deck_show_actions';
import merge from 'lodash/merge';

const DeckShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DECK_SHOW:
      return action.deck;
    default:
      return state;
  }
};

export default DeckShowReducer;
