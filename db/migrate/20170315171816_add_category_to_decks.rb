class AddCategoryToDecks < ActiveRecord::Migration[5.0]
  def change
    add_column :decks, :category, :string, null: false
  end
end
