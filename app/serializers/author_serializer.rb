class AuthorSerializer < ActiveModel::Serializer
  attributes :id, :image, :first_name, :last_name, :bio 
end
