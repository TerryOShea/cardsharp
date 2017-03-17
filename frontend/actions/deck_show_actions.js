import * as DeckAPIUtil from '../util/deck_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_DECK_SHOW = "RECEIVE_DECK_SHOW";
export const REMOVE_DECK_SHOW = "REMOVE_DECK_SHOW";

const receiveDeckShow = deck => ({
  type: RECEIVE_DECK_SHOW,
  deck
});

const removeDeckShow = () => ({
  type: REMOVE_DECK_SHOW
});

export const fetchDeckShow = id => dispatch => (
  DeckAPIUtil.fetchDeck(id)
    .then(deck => {
      dispatch(receiveDeckShow(deck));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateDeckShow = deck => dispatch => (
  DeckAPIUtil.updateDeck(deck)
    .then(updatedDeck => dispatch(receiveDeckShow(updatedDeck)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteDeckShow = () => dispatch => {
  dispatch(removeDeckShow());
};
