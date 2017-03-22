import * as TagAPIUtil from '../util/tag_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TAGS = "RECEIVE_TAGS";

const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const fetchTags = () => dispatch => (
  TagAPIUtil.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
