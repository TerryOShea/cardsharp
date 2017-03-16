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

Deck.create!(author_id: 1, title: "French", is_private: true, description: "Elementary French 101", category: "foreign_languages")
Deck.create!(author_id: 1, title: "My Favorite Buildings", category: "architecture")
Deck.create!(author_id: 1, title: "Impressionism", category: "art")
Deck.create!(author_id: 1, title: "Asian Countries", category: "geography")
Deck.create!(author_id: 1, title: "Austen", category: "literature")
Deck.create!(author_id: 1, title: "Geometry", category: "mathematics")
Deck.create!(author_id: 1, title: "Jazz", category: "music")

Card.create!(side_a: "bird", side_b: "oiseau", mastery: 2, deck_id: 1)
Card.create!(side_a: "monkey", side_b: "singe", mastery: 4, deck_id: 1)
Card.create!(side_a: "elephant", side_b: "éléphant", mastery: 5, deck_id: 1)

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
  Card.create!(side_a: colors[i], side_b: "answer here", mastery: rand(5) + 1, deck_id: 1)
  Card.create!(side_a: foods[i], side_b: "answer here", mastery: rand(5) + 1, deck_id: 3)
end
