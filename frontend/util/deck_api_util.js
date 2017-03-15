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
)

export const createDeck = deck => (
  $.ajax({
    method: 'POST',
    url: 'api/decks',
    data: { deck }
  })
);
