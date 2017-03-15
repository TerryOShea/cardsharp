import * as DeckAPIUtil from '../util/deck_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

const removeDeck = deck => ({
  type: REMOVE_DECK,
  deck
});

export const createDeck = deck => dispatch => (
  DeckAPIUtil.createDeck(deck)
    .then(newDeck => {
      dispatch(clearErrors());
      dispatch(receiveDeck(newDeck));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchDeck = id => dispatch => (
  DeckAPIUtil.fetchDeck(id)
    .then(deck => {
      dispatch(clearErrors());
      dispatch(receiveDeck(deck));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
)

export const fetchDecks = filters => dispatch => (
  DeckAPIUtil.fetchDecks(filters)
    .then(decks => {
      dispatch(clearErrors())
      dispatch(receiveDecks(decks))
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
