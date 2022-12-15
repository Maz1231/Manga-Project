puts "Creating authors..."

a1 = Author.create(first_name: "John", last_name: "Maz ")
a2 = Author.create(first_name: "Ali", last_name: "Salem")
a3 = Author.create(first_name: "Ahmed", last_name: "Ali")
a4 = Author.create(first_name: "Salem", last_name: "Nor")
a5 = Author.create(first_name: "Malaz", last_name: "Musab")

puts "Creating categories..."

c1 = Category.create(name: "Horror")
c2 = Category.create(name: "Action")
c3 = Category.create(name: "School")
c4 = Category.create(name: "Love")
c5 = Category.create(name: "YEs")


puts "Creating books..."

Book.create(title: "a", isbn: "123", year: "", price: 20, buy: "soldout", image: "", description: "g", author_id: a5.id, category_id: c3.id)
Book.create(title: "r", isbn: "321", year: "", price: 20, buy: "", image: "", description: "r", author_id: a1.id, category_id: c1.id)
Book.create(title: "g", isbn: "123", year: "", price: 20, buy: "", image: "", description: "w", author_id: a2.id, category_id: c5.id)
Book.create(title: "g", isbn: "321", year: "", price: 20, buy: "", image: "", description: "h", author_id: a3.id, category_id: c4.id)
Book.create(title: "d", isbn: "123", year: "", price: 20, buy: "", image: "", description: "3", author_id: a4.id, category_id: c2.id)