puts "🌱 Seeding spices..."

Book.destroy_all
User.destroy_all

Book.create(title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Chamber of Secrets", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Prisoner of Azkaban", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Goblet Fire", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Half-Blood Prince", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Order of the Pheonix", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Deathly Hallows", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Cursed Child", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Fantastic Beasts and Where to Find Them", genre: "Fantasy", author: "J.K. Rowling", user_id: 1)
Book.create(title: "It", genre: "Horror", author: "Stephen King", user_id: 1)
Book.create(title: "The Shining", genre: "Horror", author: "Stephen King", user_id: 1)
Book.create(title: "Salem's Lot", genre: "Horror", author: "Stephen King", user_id: 1)
Book.create(title: "DA VINCI CODE", genre: "Drama", author: "Dan Brown", user_id: 1)
Book.create(title: "Angels and Demons", genre: "Drama", author: "Dan Brown", user_id: 4)
Book.create(title: "Inferno", genre: "Drama", author: "Dan Brown", user_id: 1)
Book.create(title: "Origin", genre: "Drama", author: "Dan Brown", user_id: 1)
Book.create(title: "The Lost Symbol", genre: "Drama", author: "Dan Brown", user_id: 1)
Book.create(title: "Twilight", genre: "Drama", author: "Stephenie Meyer", user_id: 1)
Book.create(title: "Breaking Dawn", genre: "Drama", author: "Stephenie Meyer", user_id: 1)
Book.create(title: "The Host", genre: "Drama", author: "Stephenie Meyer", user_id: 1)
Book.create(title: "Eclipse", genre: "Drama", author: "Stephenie Meyer", user_id: 4)
Book.create(title: "House of Earth and Blood", genre: "Fantasy", author: "Sarah Maas", user_id: 1)
Book.create(title: "House of Sky and Breath", genre: "Fantasy", author: "Sarah Maas", user_id: 3)
Book.create(title: "Crown of Midnight", genre: "Fantasy", author: "Sarah Maas", user_id: 1)
Book.create(title: "Queen of Shadows", genre: "Fantasy", author: "Sarah Maas", user_id: 1)
Book.create(title: "Empire of Storms", genre: "Fantasy", author: "Sarah Maas", user_id: 3)
Book.create(title: "Kingdom of Ash", genre: "Fantasy", author: "Sarah Maas", user_id: 1)
Book.create(title: "Oliver Twist", genre: "Historical Fiction", author: "Charles Dickens", user_id: 1)
Book.create(title: "Hard Times", genre: "Historical Fiction", author: "Charles Dickens", user_id: 1)
Book.create(title: "The Adventures of Tom Sawyer", genre: "Historical Fiction", author: "Mark Twain", user_id: 1)
Book.create(title: "Adventures of HuckleBerry Finn", genre: "Historical Fiction", author: "Mark Twain", user_id: 1)
Book.create(title: "The Mysterious Stranger", genre: "Historical Fiction", author: "Mark Twain", user_id: 2)
Book.create(title: "To Kill a Mockingbird", genre: "Historical Fiction", author: "Harper Lee", user_id: 1)
Book.create(title: "Invisible Man", genre: "Drama", author: "Ralph Ellison", user_id: 4)
Book.create(title: "Short History of Nearly Everything", genre: "Science", author: "Bill Bryson", user_id: 1)
Book.create(title: "Notes from a Small Island", genre: "Travel", author: "Bill Bryson", user_id: 1)


User.create(username: "admin", password: "password")
User.create(username: "user1", password: "password")
User.create(username: "user2", password: "password")
User.create(username: "user3", password: "password")

puts "✅ Done seeding!"
