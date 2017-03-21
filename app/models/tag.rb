class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :decks, through: :taggings, source: :deck

  def self.most_popular(num = 10, offset = 0)
    Tag
      .joins(:taggings)
      .joins(:decks)
      .group('tags.id')
      .order('tags.id asc')
      .limit(num)
      .offset(offset)
  end
end
