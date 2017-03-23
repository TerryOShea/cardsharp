class Mastery < ApplicationRecord
  validates :user_id, :card_id, presence: true

  belongs_to :card
end
