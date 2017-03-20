# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "Terry", password: "password")
User.create!(username: "Mabel", password: "password")
User.create!(username: "Magnus", password: "password")
User.create!(username: "Oscar", password: "password")
User.create!(username: "Wanda", password: "password")

Deck.create!(author_id: 1, title: "My Favorite Foods", is_private: true, description: "A few of my favorite foods!")
Deck.create!(author_id: 1, title: "Famous Buildings")
Deck.create!(author_id: 1, title: "Colors")
Deck.create!(author_id: 1, title: "Asian Countries")
Deck.create!(author_id: 1, title: "Austen")
Deck.create!(author_id: 1, title: "Geometry")
Deck.create!(author_id: 1, title: "Jazz")

colors = []
until colors.length == 10
  color = Faker::Color.color_name
  colors << color unless colors.include?(color)
end

foods = []
until foods.length == 10
  food = Faker::Food.ingredient
  foods << food unless foods.include?(food)
end

(0..9).each do |i|
  Card.create!(side_a: colors[i], side_b: "answer here", mastery: rand(5) + 1, deck_id: 3)
  Card.create!(side_a: foods[i], side_b: "answer here", mastery: rand(5) + 1, deck_id: 1)
end

tags = %w(Art Architecture Foreign\ Languages Geography Literature Mathematics
Music Technology Health Religion Miscellaneous Food\ and\ Drink Pop\ Culture
Test\ Prep History Science)

tags.each { |tag_name| Tag.create!(name: tag_name) }
