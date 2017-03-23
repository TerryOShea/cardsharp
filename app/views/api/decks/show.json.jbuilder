json.partial! 'api/decks/deck', deck: @deck
json.description @deck.description
json.set! :cards, {}

json.set! :cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.mastery card.mastery(@current_user)
      json.partial! 'api/cards/card', card: card
    end
  end
end
