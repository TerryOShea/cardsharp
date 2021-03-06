json.extract! @tag, :name, :id
json.set! :decks, {}

json.set! :decks do
  @tag.decks.each do |deck|
    if !deck.is_private
      json.set! deck.id do
        json.partial! 'api/decks/deck', deck: deck
        json.authorName deck.author.username
      end
    end
  end
end
