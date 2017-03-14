class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :username, :string, null: false
    add_column :users, :session_token, :string, null: false
    add_column :users, :password_digest, :string, null: false
    add_index :users, :username, unique: true
  end
end
