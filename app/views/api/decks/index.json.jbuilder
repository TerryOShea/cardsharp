@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'deck', deck: deck
    json.mastery deck.deck_mastery
    json.updated deck.updated_at
  end
end
