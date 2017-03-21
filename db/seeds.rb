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

Deck.create!(author_id: 1, title: "My Favorite Foods", description: "A few of my favorite foods!")
Deck.create!(author_id: 1, title: "Famous Buildings", description: "Buildings of note")
Deck.create!(author_id: 1, title: "Colors", description: "Test the rainbow.")
Deck.create!(author_id: 1, title: "Asian Capitals", description: "The East")
Deck.create!(author_id: 1, title: "Austen Heroines", description: "Explore our favorite Regency novelist.")
Deck.create!(author_id: 1, title: "Geometry", description: "Triangles and so much more.")
Deck.create!(author_id: 1, title: "Jazz", description: "A music genre!")

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
  Card.create!(side_a: "Begins with \"#{colors[i][0].upcase}\"", side_b: colors[i], mastery: rand(5) + 1, deck_id: 3)
  hangman = foods[i].split("").map.with_index { |el, i| i % 2 == 0 ? el : "_"}.join
  Card.create!(side_a: hangman, side_b: foods[i], mastery: rand(5) + 1, deck_id: 1)
end

Card.create!(side_a: "Laos", side_b: "Vientiane", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "China", side_b: "Beijing", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "India", side_b: "New Delhi", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Japan", side_b: "Tokyo", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "North Korea", side_b: "Pyongyang", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "South Korea", side_b: "Seoul", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Thailand", side_b: "Bangkok", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Cambodia", side_b: "Phnom Penh", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Philippines", side_b: "Manila", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Indonesia", side_b: "Jakarta", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Bangladesh", side_b: "Dhaka", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Nepal", side_b: "Kathmandu", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Bhutan", side_b: "Thimphu", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Taiwan", side_b: "Taipei", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Mongolia", side_b: "Ulaanbaatar", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Tajikistan", side_b: "Dushanbe", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Turkmenistan", side_b: "Ashgabat", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Georgia", side_b: "Tbilisi", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Armenia", side_b: "Yerevan", mastery: rand(5) + 1, deck_id: 4)
Card.create!(side_a: "Pakistan", side_b: "Islamabad", mastery: rand(5) + 1, deck_id: 4)

Card.create!(side_a: "Elinor and Marianne Dashwood", side_b: "Sense and Sensibility", mastery: rand(5) + 1, deck_id: 5)
Card.create!(side_a: "Elizabeth Bennet", side_b: "Pride and Prejudice", mastery: rand(5) + 1, deck_id: 5)
Card.create!(side_a: "Fanny Price", side_b: "Mansfield Park", mastery: rand(5) + 1, deck_id: 5)
Card.create!(side_a: "Emma Woodhouse", side_b: "Emma", mastery: rand(5) + 1, deck_id: 5)
Card.create!(side_a: "Catherine Morland", side_b: "Northanger Abbey", mastery: rand(5) + 1, deck_id: 5)
Card.create!(side_a: "Anne Elliot", side_b: "Persuasion", mastery: rand(5) + 1, deck_id: 5)


tags = %w(Art Architecture Foreign\ Languages Geography Literature Mathematics
Music Technology Health Religion Miscellaneous Food\ and\ Drink Pop\ Culture
Test\ Prep History Science AP\ Exams GCSE\ Exams University\ Entrance\ Exams
Graduate\ Entrance\ Exams Financial\ Exams Bar\ Exam Driver's\ Ed TOEFL
Technology\ Certifications Other\ Certifications Military\ Exams
Medical\ &\ Nursing\ Certifications Arabic Chinese French German Hebrew Italian Japanese
Korean Linguistics Portuguese Russian Spanish TOEFL Life\ Science Earth\ Science
Physical\ Science Biology Chemistry Physics Meteorology Anatomy Physiology
Organic\ Chemistry Periodic\ Table Astronomy Genetics Geology
Environmental\ Science Plant\ Science Biochemistry Cellular\ Biology Microbiology
Marine\ Biology Oceanography Zoology Health Vocab\ Builder Phonics
Proverbs\ and\ Idioms American\ Literature British\ Literature Shakespeare English Fiction
Spelling Medieval\ Literature Poetry Creative\ Writing Social\ Studies Civics
Classics Psychology Philosophy Religion Bible Anthropology Sociology
Criminal\ Justice Social\ Work Communications Political\ Science Citizenship Arithmetic
Multiplication\ Tables Algebra Algebra\ II Geometry Statistics Trigonometry
Precalculus Calculus Probability Linear\ Algebra Statistical\ Methods Physiology
Pharmacology Pathology Epidemiology Medical\ Terminology Biochemistry Nutrition
Neurology Drugs Cardiology Cardiovascular Infectious\ Disease Endocrinology
Oncology Obstetrics Paramedic Anesthesiology Gynecology Dermatology Audiology
Pulmonary Gastroenterology Physical\ Therapy Neuroanatomy Musculoskeletal
Neuromuscular Radiography Chiropractic Periodontics Respiratory Dentistry
Childbirth Orthodontics Ophthalmology Prenatal Skeleton Urology Renal Hematology
Hormones Podiatry Orthopedics Otolaryngology ER Phlebotomy Rheumatology Surgery
Bacteriology Radiology Veterinary Occupational\ Therapy Pharmacy Bioethics
Geriatrics Pediatrics Microanatomy Medical\ Exams Diagnostic\ Imaging Pathoma
Neurosurgery Passive\ Care Gross\ Anatomy Spinal\ Anatomy Nursing
Biomedical\ Science Toxicology Cosmetology Barbering Horticulture Firefighting
Interior\ Design Electrician HVAC Air\ Traffic\ Control Pilot\ License Boating Welding
Plumbing Policing ASVAB Massage\ Therapy Military Torts Constitutional\ Law
Corporate\ Law Contract\ Law Property\ Law Criminal\ Law International\ Law
Litigation Bankruptcy Family\ Law Intellectual\ Property Bar\ Exam Evidence
Trusts\ &\ Estates Civil\ Procedure Law Business\ Law Business\ Communication
Logistics Entrepreneurship Supply\ Chain Human\ Resources Accounting Finance
Project\ Management Real\ Estate Marketing Management Risk\ Management Insurance
International\ Business Fashion Tourism Business Salesforce Advertising
Economics Finance Engineering Biotechnology Computer\ Science
Computer\ Programming Graphic\ Design Information\ Technology
Management\ Information\ Systems Cooking Nutrition Culinary\ Arts Bartending Art\ History Dance
Fine\ Arts Mythology Astrology Tarot\ Cards Capitals Sports\ Trivia Famous\ People
Basic\ Knowledge)

# tags.each { |tag_name| Tag.create!(name: tag_name) }
#
# (0..5).each do |i|
#   Tagging.create!(deck_id: i, tag_id: 1)
# end
#
# (0..3).each do |i|
#   Tagging.create!(deck_id: i, tag_id: 3)
# end
#
# Tagging.create!(deck_id: 6, tag_id: 4)
