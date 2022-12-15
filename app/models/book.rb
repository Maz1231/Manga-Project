class Book < ApplicationRecord
  belongs_to :author
  belongs_to :category
  # validates :title, presence: true, uniqueness: true, length: {minimum:3, maximum:25}
  # validates :isbn, presence: true
  # validates :year, presence: true
  # validates :price, presence: true
  # validates :buy, presence: true
  # validates :description, presence: true
end
