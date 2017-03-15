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
Deck.create!(author_id: 1, title: "Spanish", description: "Intermediate Spanish 207", category: "foreign_languages")
Deck.create!(author_id: 1, title: "German", description: "Advanced German 302", category: "foreign_languages")
Deck.create!(author_id: 3, title: "Algebra", description: "For Mrs. Hassett's class", category: "mathematics")
Deck.create!(author_id: 3, title: "Geometry", description: "For 4th period geometry class", category: "mathematics")

Card.create!(side_a: "bird", side_b: "oiseau", mastery: 2, deck_id: 1)
Card.create!(side_a: "monkey", side_b: "singe", mastery: 4, deck_id: 1)
Card.create!(side_a: "elephant", side_b: "éléphant", mastery: 5, deck_id: 1)
