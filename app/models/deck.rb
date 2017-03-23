class Deck < ApplicationRecord

  validates :author_id, :title, presence: true
  validates :is_private, inclusion: { in: [true, false] }

  has_many :cards, dependent: :destroy
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings, source: :tag
  has_many :subscriptions
  has_many :subscribers, through: :subscriptions, source: :user

  belongs_to :author, class_name: :User, foreign_key: :author_id

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end

  def self.most_recent(num = 10, offset = 0)
    self.limit(num).offset(offset).order('id desc').where(is_private: false)
  end

  def self.authored_by(author_id, current_user_id)
    query = self.where(author_id: author_id)
    query = query.where(is_private: false) unless current_user_id == author_id
    query
  end

  def deck_mastery
    return 0 if cards.length == 0
    masterySum = 0
    cards.each { |card| masterySum += card.mastery }
    (masterySum.to_f / cards.length * 20).to_i
  end

  def num_cards
    cards.length
  end

  def num_subscribers
    subscribers.length
  end

end
