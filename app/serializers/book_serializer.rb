class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :isbn, :year, :price, :buy, :image, :description
  has_one :author
end
