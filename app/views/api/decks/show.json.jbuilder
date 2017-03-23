json.partial! 'api/decks/deck', deck: @deck
json.description @deck.description
json.set! :cards, {}
json.set! :author_name, @deck.author.username

json.set! :cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.mastery @current_user ? card.mastery(@current_user) : 0
      json.partial! 'api/cards/card', card: card
    end
  end
end
