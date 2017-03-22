json.extract! @tag, :name, :id
json.set! :decks, {}

json.set! :decks do
  @tag.decks.each do |deck|
    json.set! deck.id do
      json.partial! 'api/decks/deck', deck: deck
    end
  end
end
