class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.integer :user_id, null: false
      t.integer :amount, null: false
      t.string :description, null: false
      t.timestamps null: false
    end

    add_index :expenses, :user_id
    add_index :expenses, :created_at
  end
end
