@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'deck', deck: deck
    json.mastery deck.deck_mastery
  end
end
