import { RECEIVE_TAG_SHOW } from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagShowReducer = (state = { decks: {} }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAG_SHOW:
      return action.tag;
    default:
      return state;
  }
};

export default TagShowReducer;
