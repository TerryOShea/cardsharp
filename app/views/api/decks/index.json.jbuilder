@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'deck', deck: deck
    json.mastery deck.deck_mastery
    json.updated deck.updated_at
    json.numCards deck.num_cards
  end
end
