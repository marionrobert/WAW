class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :sku
      t.text :description
      t.string :images, array: true, default: []
      t.timestamps
    end
  end
end