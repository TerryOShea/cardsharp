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

tags.each { |tag_name| Tag.create!(name: tag_name) }

(0..5).each do |i|
  Tagging.create!(deck_id: i, tag_id: 1)
end

(0..3).each do |i|
  Tagging.create!(deck_id: i, tag_id: 3)
end

Tagging.create!(deck_id: 6, tag_id: 4)
