import * as SubscriptionAPIUtil from '../util/subscription_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";

const receiveSubscription = subscription => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

const removeSubscription = subscription => ({
  type: REMOVE_SUBSCRIPTION,
  subscription
});

export const createSubscription = subscription => dispatch => (
  SubscriptionAPIUtil.createSubscription(subscription)
    .then(sub => dispatch(receiveSubscription(sub)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteSubscription = id => dispatch => (
  SubscriptionAPIUtil.deleteSubscription(id)
    .then(sub => dispatch(removeSubscription(sub)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
