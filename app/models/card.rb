class Card < ApplicationRecord

  validates :side_a, :side_b, :deck_id, presence: true

  belongs_to :deck
  has_many :masteries, dependent: :destroy

  def user_id=(user_id)
    @user_id = user_id
  end

  after_save :create_mastery

  def mastery(user_id)
    mastery = masteries.find_by(user_id: user_id, card_id: id)
    { id: mastery.id, value: mastery.value }
  end

  def create_mastery
    Mastery.create!(user_id: @user_id, card_id: Card.last.id)
  end
end
