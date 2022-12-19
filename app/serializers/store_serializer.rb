class StoreSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :description, :price, :rating, :stock
end
