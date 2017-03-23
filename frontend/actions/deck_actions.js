import * as DeckAPIUtil from '../util/deck_api_util';
import { receiveErrors, clearErrors } from './error_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const REMOVE_DECKS = "REMOVE_DECKS";

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

export const removeDecks = () => ({
  type: REMOVE_DECKS
});

export const createDeck = deck => dispatch => (
  DeckAPIUtil.createDeck(deck)
    .then(newDeck => {
      dispatch(clearErrors());
      dispatch(receiveDeck(newDeck));
      hashHistory.push(`/decks/${newDeck.id}`);
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchDecks = filters => dispatch => (
  DeckAPIUtil.fetchDecks(filters)
    .then(decks => {
      dispatch(clearErrors());
      dispatch(receiveDecks(decks));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteDeck = id => dispatch => (
  DeckAPIUtil.deleteDeck(id)
    .then(deck => {
      dispatch(clearErrors());
      dispatch(removeDeck(deck));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
