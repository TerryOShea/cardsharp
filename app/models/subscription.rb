class Subscription < ApplicationRecord

  validates :user_id, :deck_id, presence: true

  belongs_to :user
  belongs_to :deck

  after_save :create_masteries

  private

  def create_masteries
    deck = Deck.find(deck_id)
    deck.cards.each do |card|
      Mastery.create!(user_id: user_id, card_id: card.id)
    end
  end

end
