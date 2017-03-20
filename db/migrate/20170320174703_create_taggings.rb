class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :deck_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end
    add_index :taggings, :deck_id
    add_index :taggings, :tag_id
  end
end
