puts "🌱 Seeding spices..."

Book.destroy_all
User.destroy_all


Book.create(title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/61pX0NiXdvL._AC_.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Chamber of Secrets", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/61aBiYTtSJL._AC_.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Prisoner of Azkaban", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/611DIwkrZeL._AC_.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Goblet Fire", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/71ykU-RQ0nL.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Half-Blood Prince", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51uO1pQc5oL._AC_SY780_.jpg",author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Order of the Pheonix", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51190vnHUhL._AC_.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Deathly Hallows", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51jyI6lYi1L._AC_SY780_.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Harry Potter and the Cursed Child", genre: "Fantasy", image_URL: "http://prodimage.images-bn.com/pimages/9781338099133_p0_v5_s1200x630.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "Fantastic Beasts and Where to Find Them", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51azxq0UrgL._AC_SY1000_.jpg", author: "J.K. Rowling", user_id: 1)
Book.create(title: "It", genre: "Horror", image_URL: "https://m.media-amazon.com/images/I/410lHsidiVL._AC_SY1000_.jpg", author: "Stephen King", user_id: 1)
Book.create(title: "The Shining", genre: "Horror", image_URL: "https://images.booksense.com/images/675/121/9780385121675.jpg", author: "Stephen King", user_id: 1)
Book.create(title: "Salem's Lot", genre: "Horror", image_URL: "https://m.media-amazon.com/images/I/51rGHSSyvxL._AC_SY1000_.jpg", author: "Stephen King", user_id: 1)
Book.create(title: "DA VINCI CODE", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/41KuPr7kpZL._AC_SY780_.jpg", author: "Dan Brown", user_id: 1)
Book.create(title: "Angels and Demons", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/51pms8KvVuL._AC_SY780_.jpg", author: "Dan Brown", user_id: 4)
Book.create(title: "Inferno", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/41BF5MBg-rL._AC_SY1000_.jpg", author: "Dan Brown", user_id: 1)
Book.create(title: "Origin", genre: "Drama", image_URL: "https://images.penguinrandomhouse.com/cover/9780525563693", author: "Dan Brown", user_id: 1)
Book.create(title: "The Lost Symbol", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/51NMJ3kAtmL._AC_SY780_.jpg", author: "Dan Brown", user_id: 1)
Book.create(title: "Twilight", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/318nujF5v5L._AC_SY1000_.jpg", author: "Stephenie Meyer", user_id: 1)
Book.create(title: "Breaking Dawn", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/41AAHbR2PDL._AC_SY1000_.jpg", author: "Stephenie Meyer", user_id: 1)
Book.create(title: "The Host", genre: "Drama", image_URL: "https://stepheniemeyer.com/wp-content/uploads/2008/05/the-host-book-1.jpg", author: "Stephenie Meyer", user_id: 1)
Book.create(title: "Eclipse", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/41HZnxOQggL._AC_SY1000_.jpg", author: "Stephenie Meyer", user_id: 4)
Book.create(title: "House of Earth and Blood", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/514QXdDnyfL._AC_SY780_.jpg", author: "Sarah Maas", user_id: 1)
Book.create(title: "House of Sky and Breath", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51TKPGYcLCL._AC_SY1000_.jpg", author: "Sarah Maas", user_id: 3)
Book.create(title: "Crown of Midnight", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51QBaPxzcEL._AC_SY1000_.jpg", author: "Sarah Maas", user_id: 1)
Book.create(title: "Queen of Shadows", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51C1rWGBHBL._AC_SY780_.jpg", author: "Sarah Maas", user_id: 1)
Book.create(title: "Empire of Storms", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51fHG7BOQ-L._AC_SY1000_.jpg", author: "Sarah Maas", user_id: 3)
Book.create(title: "Kingdom of Ash", genre: "Fantasy", image_URL: "https://m.media-amazon.com/images/I/51ucNYtnPYL._AC_SY1000_.jpg", author: "Sarah Maas", user_id: 1)
Book.create(title: "Oliver Twist", genre: "Historical Fiction", image_URL: "https://m.media-amazon.com/images/I/61g5-J4tGqL.jpg", author: "Charles Dickens", user_id: 1)
Book.create(title: "Hard Times", genre: "Historical Fiction", image_URL: "https://images.penguinrandomhouse.com/cover/9780451530998", author: "Charles Dickens",user_id: 1)
Book.create(title: "The Adventures of Tom Sawyer", genre: "Historical Fiction", image_URL: "https://m.media-amazon.com/images/I/51Pf1eBuJ8L.jpg", author: "Mark Twain", user_id: 1)
Book.create(title: "Adventures of HuckleBerry Finn", genre: "Historical Fiction", image_URL: "https://m.media-amazon.com/images/I/41QT0tFLD7L._AC_SY780_.jpg", author: "Mark Twain", user_id: 1)
Book.create(title: "The Mysterious Stranger", genre: "Historical Fiction", image_URL: "https://www.gutenberg.org/files/50109/50109-h/images/cover.jpg", author: "Mark Twain", user_id: 2)
Book.create(title: "To Kill a Mockingbird", genre: "Historical Fiction", image_URL: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8597638736965.560c27172a040.jpg", author: "Harper Lee", user_id: 1)
Book.create(title: "Invisible Man", genre: "Drama", image_URL: "https://m.media-amazon.com/images/I/51F2cRcX4EL.jpg", author: "Ralph Ellison", user_id: 4)
Book.create(title: "Short History of Nearly Everything", genre: "Science", image_URL: "https://m.media-amazon.com/images/I/41gdQTWQgEL._AC_SY780_.jpg", author: "Bill Bryson", user_id: 1)
Book.create(title: "Notes from a Small Island", genre: "Travel", image_URL: "https://pictures.abebooks.com/isbn/9781784161194-us.jpg", author: "Bill Bryson", user_id: 1)


User.create(username: "admin", password: "password")
User.create(username: "user1", password: "password")
User.create(username: "user2", password: "password")
User.create(username: "user3", password: "password")

puts "✅ Done seeding!"
