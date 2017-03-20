class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :decks, through: :taggings, source: :deck
end
