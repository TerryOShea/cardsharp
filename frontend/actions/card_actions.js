import * as CardApiUtil from '../util/card_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

const removeCard = card => ({
  type: REMOVE_CARD,
  card
});

export const createCard = cardData => dispatch => (
  CardApiUtil.createCard(cardData)
    .then(card => {
      dispatch(clearErrors());
      dispatch(receiveCard(card));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateCard = cardData => dispatch => (
  CardApiUtil.updateCard(cardData)
    .then(card => dispatch(receiveCard(card)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteCard = id => dispatch => (
  CardApiUtil.deleteCard(id)
    .then(card => {
      dispatch(clearErrors());
      dispatch(removeCard(card));
    })
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
