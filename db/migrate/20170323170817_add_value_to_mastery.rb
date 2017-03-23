class AddValueToMastery < ActiveRecord::Migration[5.0]
  def change
    add_column :masteries, :value, :integer, default: 0
    remove_column :cards, :mastery
  end
end
