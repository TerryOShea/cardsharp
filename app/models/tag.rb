class Tag < ApplicationRecord
  validates :name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :decks, through: :taggings, source: :deck

  def self.most_popular(num = 10, offset = 0)
    Tag
      .select("tags.name, count(*) AS decks_count")
      .joins(:taggings)
      .joins(:decks)
      .group('tags.id')
      .order('decks_count desc')
      .limit(num)
      .offset(offset)
  end
end
