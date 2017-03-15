class Card < ApplicationRecord

  validates :side_a, :side_b, :mastery, :deck_id, presence: true

  belongs_to :deck
end
