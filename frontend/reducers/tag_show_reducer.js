import { RECEIVE_TAG_SHOW, REMOVE_TAG_SHOW } from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagShowReducer = (state = { decks: {} }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAG_SHOW:
      return action.tag;
    case REMOVE_TAG_SHOW:
      return { decks: {} }
    default:
      return state;
  }
};

export default TagShowReducer;
