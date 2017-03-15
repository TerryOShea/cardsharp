json.partial! 'api/decks/deck', deck: @deck

json.cards @deck.cards do |card|
  json.partial! 'api/cards/card', card: card
end
