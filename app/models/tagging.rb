class Tagging < ApplicationRecord

  validates :tag_id, :deck_id, presence: true

  belongs_to :tag
  belongs_to :deck
end
