class ChangeCardMasteryDefault < ActiveRecord::Migration[5.0]
  def change
    remove_column :cards, :mastery
    add_column :cards, :mastery, :integer, default: 0
  end
end
