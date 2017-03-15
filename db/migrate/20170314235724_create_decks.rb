class CreateDecks < ActiveRecord::Migration[5.0]
  def change
    create_table :decks do |t|
      t.string :title, null: false
      t.text :description
      t.boolean :is_private, default: true
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :decks, :author_id
  end
end
