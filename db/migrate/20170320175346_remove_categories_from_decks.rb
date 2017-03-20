class RemoveCategoriesFromDecks < ActiveRecord::Migration[5.0]
  def change
    remove_column :decks, :category
  end
end
