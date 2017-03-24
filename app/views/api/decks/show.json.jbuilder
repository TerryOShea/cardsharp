json.partial! 'api/decks/deck', deck: @deck
json.description @deck.description
json.set! :author_name, @deck.author.username
json.set! :tags, @deck.tags.map { |tag| { id: tag.id, name: tag.name } }
json.set! :cards, {}

json.set! :cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.mastery @current_user && @current_user.subscribed_decks.include?(@deck) ? card.mastery(@current_user.id) : 0
      json.partial! 'api/cards/card', card: card
    end
  end
end
