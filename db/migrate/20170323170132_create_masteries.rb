class CreateMasteries < ActiveRecord::Migration[5.0]
  def change
    create_table :masteries do |t|
      t.integer :card_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :masteries, :card_id
    add_index :masteries, :user_id
  end
end
