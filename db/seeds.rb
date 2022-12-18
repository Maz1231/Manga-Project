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

Book.create(title: "a", isbn: "123", year: "", price: 20, buy: "soldout", image: "https://s2982.pcdn.co/wp-content/uploads/2016/10/Inuyasha.jpg.webp", description: "g", author_id: a5.id, category_id: c3.id)
Book.create(title: "r", isbn: "321", year: "", price: 20, buy: "", image: "https://s2982.pcdn.co/wp-content/uploads/2018/03/Fullmetal-Alchemist-volume-1-cover-by-Hiromu-Arakawa.jpg.webp", description: "r", author_id: a1.id, category_id: c1.id)
Book.create(title: "g", isbn: "123", year: "", price: 20, buy: "", image: "https://s2982.pcdn.co/wp-content/uploads/2017/12/Pretty-Guardian-Sailor-Moon-cover-by-Naoko-Takeuchi-200x300.jpg.webp", description: "w", author_id: a2.id, category_id: c5.id)
Book.create(title: "g", isbn: "321", year: "", price: 20, buy: "", image: "https://s2982.pcdn.co/wp-content/uploads/2016/07/Attack-on-Titan-by-Hajime-Isayama.jpg.webp", description: "h", author_id: a3.id, category_id: c4.id)
Book.create(title: "d", isbn: "123", year: "", price: 20, buy: "", image: "https://s2982.pcdn.co/wp-content/uploads/2017/03/One-Punch-Man-One-Yusuke-Murata.jpg.webp", description: "3", author_id: a4.id, category_id: c2.id)