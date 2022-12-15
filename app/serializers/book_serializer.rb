class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :isbn, :year, :price, :buy, :image, :description, :category_belongs_to
  has_one :author
end
