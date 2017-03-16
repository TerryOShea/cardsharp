class Deck < ApplicationRecord

  validates :author_id, :title, :category, presence: true
  validates :is_private, inclusion: { in: [true, false] }
  # TODO: validate category's inclusion in category list

  has_many :cards

  def self.most_recent(num, offset)
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
    (masterySum.to_f / cards.length).ceil
  end

end
