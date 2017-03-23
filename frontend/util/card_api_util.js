export const fetchCards = filters => (
  $.ajax({
    method: 'GET',
    url: 'api/cards',
    data: filters
  })
);
// TODO: let users filter, e.g. "only mastery-1 cards"

export const createCard = card => (
  $.ajax({
    method: 'POST',
    url: 'api/cards',
    data: { card }
  })
);

export const updateCard = card => (
  $.ajax({
    method: 'PATCH',
    url: `api/cards/${card.id}`,
    data: { card }
  })
);

export const updateMastery = mastery => (
  $.ajax({
    method: 'PATCH',
    url: `api/masteries/${mastery.id}`,
    data: { mastery }
  })
)

export const deleteCard = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/cards/${id}`
  })
);
