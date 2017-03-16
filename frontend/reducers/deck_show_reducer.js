import { RECEIVE_DECK_SHOW } from '../actions/deck_show_actions';
import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';
import merge from 'lodash/merge';

const DeckShowReducer = (state = { cards: {} }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DECK_SHOW:
      return action.deck;
    case RECEIVE_CARD:
      const cardsWithNew = merge({}, state.cards, { [action.card.id]: action.card });
      return merge({}, state, { cards: cardsWithNew });
    case REMOVE_CARD:
      const newState = merge({}, state);
      delete newState.cards[action.card.id];
      return newState;
    default:
      return state;
  }
};

export default DeckShowReducer;
