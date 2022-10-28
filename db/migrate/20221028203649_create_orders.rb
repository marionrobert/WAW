class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.json :items
      t.references :user, null: false, foreign_key: true
      t.string :state, default: "pending"
      t.string :checkout_session_id
      t.timestamps
    end
  end
end
