import * as DeckAPIUtil from '../util/deck_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_DECK_SHOW = "RECEIVE_DECK_SHOW";

const receiveDeckShow = deck => ({
  type: RECEIVE_DECK_SHOW,
  deck
});

export const fetchDeck = id => dispatch => (
  DeckAPIUtil.fetchDeck(id)
    .then(deck => {
      dispatch(clearErrors());
      dispatch(receiveDeckShow(deck));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
