# USERS

User.create!(username: "Terry", password: "password")
User.create!(username: "Mabel", password: "password")
User.create!(username: "Magnus", password: "password")
User.create!(username: "Oscar", password: "password")
User.create!(username: "Wanda", password: "password")



# DECKS
Deck.create!(author_id: 1, title: "My Favorite Foods", description: "A few of my favorite foods!")
Deck.create!(author_id: 1, title: "Famous Buildings", description: "Buildings of note")
Deck.create!(author_id: 1, title: "Colors", description: "Test the rainbow.")
Deck.create!(author_id: 1, title: "Asian Capitals", description: "The East")
Deck.create!(author_id: 1, title: "Austen Heroines", description: "Explore our favorite Regency novelist.")
Deck.create!(author_id: 1, title: "Geometry", description: "Triangles and so much more.")
Deck.create!(author_id: 1, title: "Jazz", description: "A music genre!")



# CARDS
colors = []
until colors.length == 10
  color = Faker::Color.color_name
  colors << color unless colors.include?(color)
end

foods = []
until foods.length == 10
  food = Faker::Food.ingredient
  foods << food unless foods.include?(food) || food.split(" ").length > 1
end

(0..9).each do |i|
  Card.create!(side_a: "Begins with \"#{colors[i][0].upcase}\"", side_b: colors[i], mastery: rand(5) + 1, deck_id: 3)
  hangman = foods[i].split("").map.with_index { |el, ind| ind % 2 == 0 ? el : "_"}.join
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



# TAGS
tags = %w(Miscellaneous AP\ Exams ASVAB Accounting Advertising Air\ Traffic\ Control
Algebra Algebra\ II American\ Literature Anatomy Anesthesiology Anthropology
Arabic Architecture Arithmetic Art Art\ History Astrology Astronomy Audiology
Bacteriology Bankruptcy Bar\ Exam Barbering Bartending Basic\ Knowledge Bible
Biochemistry Bioethics Biology Biomedical\ Science Biotechnology Boating
British\ Literature Business Business\ Communication Business\ Law Calculus
Capitals Cardiology Cardiovascular Cellular\ Biology Chemistry Childbirth Chinese
Chiropractic Citizenship Civics Civil\ Procedure Classics Communications
Computer\ Programming Computer\ Science Constitutional\ Law Contract\ Law Cooking
Corporate\ Law Cosmetology Creative\ Writing Criminal\ Justice Criminal\ Law
Culinary\ Arts Dance Dentistry Dermatology Diagnostic\ Imaging Driver's\ Ed Drugs
ER Earth\ Science Economics Electrician Endocrinology Engineering English
Entrepreneurship Environmental\ Science Epidemiology Evidence Family\ Law
Famous\ People Fashion Fiction Finance Financial\ Exams Fine\ Arts Firefighting
Food\ and\ Drink Foreign\ Languages French GCSE\ Exams Gastroenterology Genetics
Geography Geology Geometry Geriatrics German Graduate\ Entrance\ Exams
Graphic\ Design Gross\ Anatomy Gynecology HVAC Health Hebrew Hematology History
Hormones Horticulture Human\ Resources Infectious\ Disease
Information\ Technology Insurance Intellectual\ Property Interior\ Design
International\ Business International\ Law Italian Japanese Korean Law
Life\ Science Linear\ Algebra Linguistics Literature Litigation Logistics
Management Management\ Information\ Systems Marine\ Biology Marketing
Massage\ Therapy Mathematics Medical\ &\ Nursing\ Certifications Medical\ Exams
Medical\ Terminology Medieval\ Literature Meteorology Microanatomy Microbiology
Military Military\ Exams Multiplication\ Tables Musculoskeletal
Music Mythology Neuroanatomy Neurology Neuromuscular Neurosurgery Nursing
Nutrition Obstetrics Occupational\ Therapy Oceanography Oncology Ophthalmology
Organic\ Chemistry Orthodontics Orthopedics Other\ Certifications Otolaryngology
Paramedic Passive\ Care Pathology Pathoma Pediatrics Periodic\ Table Periodontics
Pharmacology Pharmacy Philosophy Phlebotomy Phonics Physical\ Science
Physical\ Therapy Physics Physiology Pilot\ License Plant\ Science Plumbing
Podiatry Poetry Policing Political\ Science Pop\ Culture Portuguese Precalculus
Prenatal Probability Project\ Management Property\ Law Proverbs\ and\ Idioms
Psychology Pulmonary Radiography Radiology Real\ Estate Religion Renal
Respiratory Rheumatology Risk\ Management Russian Salesforce Science Shakespeare
Skeleton Social\ Studies Social\ Work Sociology Spanish Spelling Spinal\ Anatomy
Sports\ Trivia Statistical\ Methods Statistics Supply\ Chain Surgery TOEFL
Tarot\ Cards Technology Technology\ Certifications Test\ Prep Torts Tourism
Toxicology Trigonometry Trusts\ &\ Estates University\ Entrance\ Exams Urology
Veterinary Vocab\ Builder Welding Zoology)

tags.each { |tag_name| Tag.create!(name: tag_name) }



# TAGGINGS
(1..7).each do |deck_id|
  Tagging.create!(deck_id: deck_id, tag_id: 1)
end
