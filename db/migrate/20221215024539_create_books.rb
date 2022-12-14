class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :isbn
      t.string :year
      t.integer :price
      t.string :buy
      t.string :image
      t.string :description
      t.references :author, null: false, foreign_key: true
    

      t.timestamps
    end
  end
end
