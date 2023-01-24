puts " Seeding users..."

User.destroy_all
# Seed your database here

u1 = User.create(username: "Shraddha", password: "111")
u2 = User.create(username: "Hunter", password: "222")
puts "✅ Done seeding!"
