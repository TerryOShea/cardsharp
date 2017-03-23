import * as TagAPIUtil from '../util/tag_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG_SHOW = "RECEIVE_TAG_SHOW";
export const REMOVE_TAG_SHOW = "REMOVE_TAG_SHOW";

const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

const receiveTagShow = tag => ({
  type: RECEIVE_TAG_SHOW,
  tag
})

const removeTagShow = () => ({
  type: REMOVE_TAG_SHOW
});

export const fetchTags = () => dispatch => (
  TagAPIUtil.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchTagShow = name => dispatch => (
  TagAPIUtil.fetchTags(name)
    .then(tag => dispatch(receiveTagShow(tag)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const clearTagShow = () => dispatch => (
  dispatch(removeTagShow())
)
