class Subscription < ApplicationRecord

  validates :user_id, :deck_id, presence: true

  belongs_to :user
  belongs_to :deck
end
