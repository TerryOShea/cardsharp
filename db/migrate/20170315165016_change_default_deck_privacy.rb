class ChangeDefaultDeckPrivacy < ActiveRecord::Migration[5.0]
  def change
    remove_column :decks, :is_private
    add_column :decks, :is_private, :boolean, default: false
  end
end
