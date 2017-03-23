export const createSubscription = subscription => (
  $.ajax({
    method: 'CREATE',
    url: 'api/subscriptions',
    data: { subscription }
  })
);

export const deleteSubscription = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/subscriptions/${id}`
  })
)
