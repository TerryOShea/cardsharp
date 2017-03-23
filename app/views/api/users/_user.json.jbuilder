json.extract! user, :username, :id
json.set! :subscribed_decks, user.subscribed_decks.map { |deck| deck.id }
