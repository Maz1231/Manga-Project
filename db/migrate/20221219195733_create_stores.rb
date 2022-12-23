class CreateStores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :image
      t.string :name
      t.string :description
      t.integer :price
      

      t.timestamps
    end
  end
end
