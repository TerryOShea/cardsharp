import { RECEIVE_TAG_SHOW, REMOVE_TAG_SHOW } from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAG_SHOW:
      const newTagShow = merge({}, action.tag);
      delete newTagShow.decks;
      return newTagShow;
    case REMOVE_TAG_SHOW:
      return {}
    default:
      return state;
  }
};

export default TagShowReducer;
