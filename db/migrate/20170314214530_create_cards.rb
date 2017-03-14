class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.text :side_a, null: false
      t.text :side_b, null: false
      t.integer :mastery, default: 1
      t.integer :deck_id, null: false

      t.timestamps
    end
    add_index :cards, :deck_id
  end
end
