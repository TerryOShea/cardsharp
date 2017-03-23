class Card < ApplicationRecord

  validates :side_a, :side_b, :mastery, :deck_id, presence: true

  belongs_to :deck
  has_many :masteries

  after_validation :create_mastery

  def create_mastery
    Mastery.create!(user_id: current_user.id, card_id: Card.last.id)
  end
end
