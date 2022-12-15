class Category < ApplicationRecord
    has_many :books, dependent: :destroy
    has_many :authors, through: :books
    validates :name, presence: true, uniqueness: true, length: {minimum:3}
end
