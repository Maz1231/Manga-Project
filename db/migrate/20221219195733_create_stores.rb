class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :image
      t.string :name
      t.string :description
      t.integer :price
      t.string :rating
      t.string :stock

      t.timestamps
    end
  end
end
