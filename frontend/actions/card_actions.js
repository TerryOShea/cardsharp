import * as CardApiUtil from '../util/card_api_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

const removeCard = card => ({
  type: REMOVE_CARD,
  card
});

export const createCard;
