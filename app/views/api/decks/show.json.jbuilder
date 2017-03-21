json.partial! 'api/decks/deck', deck: @deck
json.set! :numCards, @deck.num_cards
json.set! :cards, {}

json.set! :cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.partial! 'api/cards/card', card: card
    end
  end
end
