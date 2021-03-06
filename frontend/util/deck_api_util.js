export const fetchDecks = data => (
  $.ajax({
    method: 'GET',
    url: 'api/decks',
    data
  })
);

export const fetchDeck = id => (
  $.ajax({
    method: 'GET',
    url: `api/decks/${id}`
  })
);

export const createDeck = deck => (
  $.ajax({
    method: 'POST',
    url: 'api/decks',
    data: { deck }
  })
);

export const deleteDeck = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/decks/${id}`
  })
);

export const updateDeck = deck => (
  $.ajax({
    method: 'PATCH',
    url: `api/decks/${deck.id}`,
    data: { deck }
  })
);

export const createSubscription = subscription => (
  $.ajax({
    method: 'POST',
    url: 'api/subscriptions',
    data: { subscription }
  })
);

export const deleteSubscription = deck_id => (
  $.ajax({
    method: 'DELETE',
    url: 'api/subscriptions/0',
    data: { deck_id }
  })
);
