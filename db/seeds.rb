# USERS

terry = User.create!(username: "Terry", password: "password")
mabel = User.create!(username: "Mabel", password: "password")
magnus = User.create!(username: "Magnus", password: "password")
oscar = User.create!(username: "Oscar", password: "password")
wanda = User.create!(username: "Wanda", password: "password")



# DECKS
Deck.create!(author_id: 1, title: "My Favorite Foods", description: "A few of my favorite foods!")
Deck.create!(author_id: 1, title: "Famous Buildings", description: "Buildings of import")
Deck.create!(author_id: 1, title: "Colors", description: "Quiz the rainbow")
Deck.create!(author_id: 1, title: "Asian Capitals", description: "Ja-card-a, here we come")
Deck.create!(author_id: 1, title: "Austen Heroines", description: "Explore our favorite Regency novelist.")
Deck.create!(author_id: 1, title: "Geometry", description: "Triangle, Rectangle, and a special guest appearance by Circle")
Deck.create!(author_id: 1, title: "Jazz", description: "Full of pizzazz")



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
  Card.create!(side_a: "Begins with \"#{colors[i][0].upcase}\"", side_b: colors[i], deck_id: 3, user_id: 1)
  hangman = foods[i].split("").map.with_index { |el, ind| ind % 2 == 0 ? el : "_"}.join
  Card.create!(side_a: hangman, side_b: foods[i], deck_id: 1, user_id: 1)
end

Card.create!(side_a: "Laos", side_b: "Vientiane", deck_id: 4, user_id: 1)
Card.create!(side_a: "China", side_b: "Beijing", deck_id: 4, user_id: 1)
Card.create!(side_a: "India", side_b: "New Delhi", deck_id: 4, user_id: 1)
Card.create!(side_a: "Japan", side_b: "Tokyo", deck_id: 4, user_id: 1)
Card.create!(side_a: "North Korea", side_b: "Pyongyang", deck_id: 4, user_id: 1)
Card.create!(side_a: "South Korea", side_b: "Seoul", deck_id: 4, user_id: 1)
Card.create!(side_a: "Thailand", side_b: "Bangkok", deck_id: 4, user_id: 1)
Card.create!(side_a: "Cambodia", side_b: "Phnom Penh", deck_id: 4, user_id: 1)
Card.create!(side_a: "Philippines", side_b: "Manila", deck_id: 4, user_id: 1)
Card.create!(side_a: "Indonesia", side_b: "Jakarta", deck_id: 4, user_id: 1)
Card.create!(side_a: "Bangladesh", side_b: "Dhaka", deck_id: 4, user_id: 1)
Card.create!(side_a: "Nepal", side_b: "Kathmandu", deck_id: 4, user_id: 1)
Card.create!(side_a: "Bhutan", side_b: "Thimphu", deck_id: 4, user_id: 1)
Card.create!(side_a: "Taiwan", side_b: "Taipei", deck_id: 4, user_id: 1)
Card.create!(side_a: "Mongolia", side_b: "Ulaanbaatar", deck_id: 4, user_id: 1)
Card.create!(side_a: "Tajikistan", side_b: "Dushanbe", deck_id: 4, user_id: 1)
Card.create!(side_a: "Turkmenistan", side_b: "Ashgabat", deck_id: 4, user_id: 1)
Card.create!(side_a: "Georgia", side_b: "Tbilisi", deck_id: 4, user_id: 1)
Card.create!(side_a: "Armenia", side_b: "Yerevan", deck_id: 4, user_id: 1)
Card.create!(side_a: "Pakistan", side_b: "Islamabad", deck_id: 4, user_id: 1)

Card.create!(side_a: "Elinor and Marianne Dashwood", side_b: "Sense and Sensibility", deck_id: 5, user_id: 1)
Card.create!(side_a: "Elizabeth Bennet", side_b: "Pride and Prejudice", deck_id: 5, user_id: 1)
Card.create!(side_a: "Fanny Price", side_b: "Mansfield Park", deck_id: 5, user_id: 1)
Card.create!(side_a: "Emma Woodhouse", side_b: "Emma", deck_id: 5, user_id: 1)
Card.create!(side_a: "Catherine Morland", side_b: "Northanger Abbey", deck_id: 5, user_id: 1)
Card.create!(side_a: "Anne Elliot", side_b: "Persuasion", deck_id: 5, user_id: 1)



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



# SUBSCRIPTIONS
Subscription.create!(user_id: 5, deck_id: 1)
Subscription.create!(user_id: 5, deck_id: 2)
Subscription.create!(user_id: 5, deck_id: 3)



# EXTRA SEEDING

Deck.create!(author_id: 2, title: "Celebrities Spotted at Starbucks", description: "Title says it all")
Card.create!(side_a: "Gary Busey", side_b: "On 3/4/13 at the Stanyan Ave. location, \"Lethal Weapon\" star Gary Busey ordered a sugar-free grande vanilla latte", deck_id: 8, user_id: 2)
Tagging.create!(deck_id: 8, tag_id: 81)
Tagging.create!(deck_id: 8, tag_id: 1)

Deck.create!(author_id: 2, title: "Jean-Paul Gaultier", description: "Talented French haute couturier")
Card.create!(side_a: "For which luxury goods manufacturer was M. Gaultier creative director from 2003-2010?", side_b: "Hermès", deck_id: 9, user_id: 2)
Tagging.create!(deck_id: 9, tag_id: 82)
Tagging.create!(deck_id: 9, tag_id: 86)
Tagging.create!(deck_id: 9, tag_id: 16)

Deck.create!(author_id: 2, title: "Harper Lee Novels", description: "Written by Southern fiction doyenne Harper Lee")
Card.create!(side_a: "Published in 2015", side_b: "Go Set a Watchman", deck_id: 10, user_id: 2)
Tagging.create!(deck_id: 10, tag_id: 83)
Tagging.create!(deck_id: 10, tag_id: 125)
Tagging.create!(deck_id: 10, tag_id: 59)

Deck.create!(author_id: 2, title: "World Currencies", description: "A riyal tough deck")
Card.create!(side_a: "Costa Rica", side_b: "colón", deck_id: 11, user_id: 2)
Tagging.create!(deck_id: 11, tag_id: 84)
Tagging.create!(deck_id: 11, tag_id: 94)
Tagging.create!(deck_id: 11, tag_id: 116)

Deck.create!(author_id: 2, title: "AP Macroeconomics", description: "Supply, demand, and everything in between")
Card.create!(side_a: "What is the top score achievable on this test?", side_b: "A 5", deck_id: 12, user_id: 2)
Tagging.create!(deck_id: 12, tag_id: 85)
Tagging.create!(deck_id: 12, tag_id: 116)
Tagging.create!(deck_id: 12, tag_id: 2)
Tagging.create!(deck_id: 12, tag_id: 224)

Deck.create!(author_id: 2, title: "Impressionism", description: "I had no Monet to buy Degas to make de Van Gogh.")
Card.create!(side_a: "Which of these was an Impressionist painter: Picasso, Renoir, Kandinsky, Rousseau?", side_b: "Renoir", deck_id: 13, user_id: 2)
Tagging.create!(deck_id: 13, tag_id: 86)
Tagging.create!(deck_id: 13, tag_id: 16)
Tagging.create!(deck_id: 13, tag_id: 17)

Deck.create!(author_id: 2, title: "Firefighting", description: "If you can't take the heat, go be a dentist")
Card.create!(side_a: "Which is better in the field, water or lighter fluid?", side_b: "The answer is water", deck_id: 14, user_id: 2)
Tagging.create!(deck_id: 14, tag_id: 87)
Tagging.create!(deck_id: 14, tag_id: 224)



Deck.create!(author_id: 3, title: "McDonalds Slogans Throughout Time", description: "Ronald McDonald's smooth verbalizations.")
Card.create!(side_a: "Put a __ on", side_b: "Smile", deck_id: 15, user_id: 3)
Tagging.create!(deck_id: 15, tag_id: 88)
Tagging.create!(deck_id: 15, tag_id: 186)
Tagging.create!(deck_id: 15, tag_id: 5)

Deck.create!(author_id: 3, title: "Welsh", description: "Llanfairpwllgwyngyllgogerychwyrndrobwyllllantysiliogogogoch")
Card.create!(side_a: "Ffrog", side_b: "Dress", deck_id: 16, user_id: 3)
Tagging.create!(deck_id: 16, tag_id: 89)

Deck.create!(author_id: 3, title: "Plus-Que-Parfait", description: "So much more than a parfait")
Card.create!(side_a: "Paul [avait/était] sorti au ciné", side_b: "était", deck_id: 17, user_id: 3)
Tagging.create!(deck_id: 17, tag_id: 90)
Tagging.create!(deck_id: 17, tag_id: 89)

Deck.create!(author_id: 3, title: "Ace Your GSCEs", description: "These are secondary school qualification tests in Commonwealth countries")
Card.create!(side_a: "What does GSCE stand for?", side_b: "General Certificate of Secondary Education", deck_id: 18, user_id: 3)
Tagging.create!(deck_id: 18, tag_id: 91)
Tagging.create!(deck_id: 18, tag_id: 224)
Tagging.create!(deck_id: 18, tag_id: 230)

Deck.create!(author_id: 3, title: "The Digestive System", description: "I am Jack's raging bile duct")
Card.create!(side_a: "What are the three regions of the small intestine?", side_b: "The duodenum, the jejunum, and the ileum", deck_id: 19, user_id: 3)
Tagging.create!(deck_id: 19, tag_id: 92)
Tagging.create!(deck_id: 19, tag_id: 10)
Tagging.create!(deck_id: 19, tag_id: 101)
Tagging.create!(deck_id: 19, tag_id: 181)
Tagging.create!(deck_id: 19, tag_id: 178)
Tagging.create!(deck_id: 19, tag_id: 231)

Deck.create!(author_id: 3, title: "Base Pairs", description: "You've got your A's, C's, G's, and T's. You're looking for U's, you rna wrong place.")
Card.create!(side_a: "Adenine (A)", side_b: "Thymine (T)", deck_id: 20, user_id: 3)
Tagging.create!(deck_id: 20, tag_id: 93)
Tagging.create!(deck_id: 20, tag_id: 30)
Tagging.create!(deck_id: 20, tag_id: 42)
Tagging.create!(deck_id: 20, tag_id: 140)

Deck.create!(author_id: 3, title: "Greatest Lakes", description: "HOMES, definitively ranked")
Card.create!(side_a: "All others are inferior to it", side_b: "Superior", deck_id: 21, user_id: 3)
Tagging.create!(deck_id: 21, tag_id: 94)



Deck.create!(author_id: 4, title: "Geology Rocks!", description: "A very gneiss deck indeed")
Card.create!(side_a: "What are the three types of rock?", side_b: "Igneous, metamorphic, and alt/electronica", deck_id: 22, user_id: 4)
Tagging.create!(deck_id: 22, tag_id: 95)

Deck.create!(author_id: 4, title: "Sines, Cosines, Tangents", description: "Don't be a square--learn the triangular trig functions")
Card.create!(side_a: "How do you calculate a triangle angle's cosine?", side_b: "adjacent side/hypotenuse", deck_id: 23, user_id: 4)
Tagging.create!(deck_id: 23, tag_id: 96)

Deck.create!(author_id: 4, title: "Elderly Care", description: "The ins and outs of the senescent set")
Card.create!(side_a: "How long did the oldest verified person live?", side_b: "122 years, 164 days (Jeanne Calment)", deck_id: 24, user_id: 4)
Tagging.create!(deck_id: 24, tag_id: 97)

Deck.create!(author_id: 4, title: "German Pronunciation", description: "If ü want to pronounce things correctly")
Card.create!(side_a: "Kindergarten", side_b: "'Kin' like family, 'der' like the German word 'der', 'gar' like the fish, 'ten' like 'den'", deck_id: 25, user_id: 4)
Tagging.create!(deck_id: 25, tag_id: 98)

Deck.create!(author_id: 4, title: "GRE General Information", description: "It's GREat")
Card.create!(side_a: "What does GRE stand for?", side_b: "Graduate Record Examination", deck_id: 26, user_id: 4)
Tagging.create!(deck_id: 26, tag_id: 99)

Deck.create!(author_id: 4, title: "Color Principles", description: "Spin the color wheel")
Card.create!(side_a: "Opposite of orange", side_b: "It's blue, of course", deck_id: 27, user_id: 4)
Tagging.create!(deck_id: 27, tag_id: 100)

Deck.create!(author_id: 4, title: "Human Bones", description: "All 212 of them")
Card.create!(side_a: "This bone is anatomically paired with the fibula", side_b: "The tibia", deck_id: 28, user_id: 4)
Tagging.create!(deck_id: 28, tag_id: 101)



Deck.create!(author_id: 5, title: "Basic Sanitation", description: "TL;DR: wash your hands")
Card.create!(side_a: "How long should you wash your hands for?", side_b: "20+ seconds", deck_id: 29, user_id: 5)
Tagging.create!(deck_id: 29, tag_id: 104)

Deck.create!(author_id: 5, title: "Hebrew I", description: "Shabbat Shalom, friends")
Card.create!(side_a: "First letter of the alphabet?", side_b: "Aleph", deck_id: 30, user_id: 5)
Tagging.create!(deck_id: 30, tag_id: 105)

Deck.create!(author_id: 5, title: "Blood Types", description: "B Positive, friends")
Card.create!(side_a: "Name 'em", side_b: "O-, O+, A-, A+, B-, B+, AB-, AB+", deck_id: 31, user_id: 5)
Tagging.create!(deck_id: 31, tag_id: 106)

Deck.create!(author_id: 5, title: "The Industrial Revolution", description: "Steel yourself for a great deck")
Card.create!(side_a: "The inventor of the Watt steam engine", side_b: "James Watt", deck_id: 32, user_id: 5)
Tagging.create!(deck_id: 32, tag_id: 107)

Deck.create!(author_id: 5, title: "Plant Hormones", description: "a.k.a. phytohormones")
Card.create!(side_a: "What does ethylene do?", side_b: "It ripens", deck_id: 33, user_id: 5)
Tagging.create!(deck_id: 33, tag_id: 108)

Deck.create!(author_id: 5, title: "The Care and Keeping of Your Basil Plant", description: "Water it, basi(ca)lly")
Card.create!(side_a: "What must you never, ever do?", side_b: "Insult your basil to its face; only do so in a different room or outside of hearing distance", deck_id: 34, user_id: 5)
Tagging.create!(deck_id: 34, tag_id: 109)

Deck.create!(author_id: 5, title: "SARS", description: "Stay informed")
Card.create!(side_a: "What does SARS stand for?", side_b: "Severe Acute Respiratory Syndrome", deck_id: 35, user_id: 5)
Tagging.create!(deck_id: 35, tag_id: 111)



# POPULAR DECK
Deck.create!(author_id: 3, title: "Vocab: A", description: "A is for Abecedarian")
Tagging.create!(deck_id: 36, tag_id: 233)
Card.create!(side_a: "Abnegate", side_b: "renounce or reject (something desired or valuable)", deck_id: 36, user_id: 3)
Card.create!(side_a: "Abrogate", side_b: "repeal or do away with (a law, right, or formal agreement)", deck_id: 36, user_id: 3)
Card.create!(side_a: "Abscess", side_b: "a collection of pus that has built up within the tissue of the body", deck_id: 36, user_id: 3)
Card.create!(side_a: "Acclivity", side_b: "an upward slope", deck_id: 36, user_id: 3)
Card.create!(side_a: "Actuary", side_b: "a business professional who deals with the measurement and management of risk and uncertainty", deck_id: 36, user_id: 3)
Card.create!(side_a: "Ad valorem", side_b: "(of the levying of tax or customs duties) in proportion to the estimated value of the goods or transaction concerned", deck_id: 36, user_id: 3)
Card.create!(side_a: "Adit", side_b: "a horizontal passage leading into a mine for the purposes of access or drainage", deck_id: 36, user_id: 3)
Card.create!(side_a: "Aerodyne", side_b: "any heavier-than-air aircraft that derives its lift principally from aerodynamic forces", deck_id: 36, user_id: 3)
Card.create!(side_a: "Afflatus", side_b: "a divine creative impulse or inspiration", deck_id: 36, user_id: 3)
Card.create!(side_a: "Agnate", side_b: "a person descended from the same male ancestor as another specified or implied person, especially through the male line", deck_id: 36, user_id: 3)
Card.create!(side_a: "Aigrette", side_b: "a headdress consisting of a white egret’s feather or other decoration such as a spray of gems", deck_id: 36, user_id: 3)
Card.create!(side_a: "Albatross", side_b: "a seemingly inescapable moral or emotional burden, as of guilt or responsibility ", deck_id: 36, user_id: 3)
Card.create!(side_a: "Alderman", side_b: "an elected member of a municipal council", deck_id: 36, user_id: 3)
Card.create!(side_a: "Aleatory", side_b: "depending on the throw of a dice or on chance; random", deck_id: 36, user_id: 3)
Card.create!(side_a: "Alluvium", side_b: "a deposit of clay, silt, sand, and gravel left by flowing streams in a river valley or delta, typically producing fertile soil", deck_id: 36, user_id: 3)
Card.create!(side_a: "Alpenstock", side_b: "a long iron-tipped staff used by hikers and mountain climbers", deck_id: 36, user_id: 3)
Card.create!(side_a: "Ambit", side_b: "the scope, extent, or bounds of something", deck_id: 36, user_id: 3)
Card.create!(side_a: "Amphoric", side_b: "characteristic of a sound made by blowing across the mouth of a bottle", deck_id: 36, user_id: 3)
Card.create!(side_a: "Anaclitic", side_b: "relating to or characterized by a strong emotional dependence on another or others", deck_id: 36, user_id: 3)
Card.create!(side_a: "Anapest", side_b: "a metrical foot consisting of two short or unstressed syllables followed by one long or stressed syllable", deck_id: 36, user_id: 3)
Card.create!(side_a: "Andiron", side_b: "a metal support, typically one of a pair, that holds wood burning in a fireplace", deck_id: 36, user_id: 3)
Card.create!(side_a: "Anfractuous", side_b: "sinuous or circuitous", deck_id: 36, user_id: 3)
Card.create!(side_a: "Annular", side_b: "ring-shaped", deck_id: 36, user_id: 3)
Card.create!(side_a: "Aperçu", side_b: "a comment or brief reference that makes an illuminating or entertaining point", deck_id: 36, user_id: 3)
Card.create!(side_a: "Aphasia", side_b: "a language disorder that affects a person’s ability to communicate", deck_id: 36, user_id: 3)
Card.create!(side_a: "Apical", side_b: "of, relating to or denoting an apex", deck_id: 36, user_id: 3)
Card.create!(side_a: "Apocope", side_b: "the loss of a sound or sounds at the end of a word, e.g. in the derivation of curio from curiosity", deck_id: 36, user_id: 3)
Card.create!(side_a: "Apologia", side_b: "a formal written defense of one’s opinions or conduct", deck_id: 36, user_id: 3)
Card.create!(side_a: "Apostasy", side_b: "the abandonment or renunciation of a religious or political belief", deck_id: 36, user_id: 3)
Card.create!(side_a: "Apothegm", side_b: "a concise saying or maxim; an aphorism", deck_id: 36, user_id: 3)
Card.create!(side_a: "Apotropaic", side_b: "supposedly having the power to avert evil influences or bad luck", deck_id: 36, user_id: 3)
Card.create!(side_a: "Apposite", side_b: "apt in the circumstances or in relation to something", deck_id: 36, user_id: 3)
Card.create!(side_a: "Aquarelle", side_b: "a style of painting using thin, typically transparent watercolors", deck_id: 36, user_id: 3)
Card.create!(side_a: "Asperity", side_b: "harshness of tone or manner", deck_id: 36, user_id: 3)
Card.create!(side_a: "Aspirated", side_b: "breathing in solid material", deck_id: 36, user_id: 3)
Card.create!(side_a: "Asseverate", side_b: "to declare earnestly or solemnly; affirm positively; aver", deck_id: 36, user_id: 3)
Card.create!(side_a: "Assuasive", side_b: "soothing, calming", deck_id: 36, user_id: 3)
Card.create!(side_a: "Attar", side_b: "a fragrant essential oil, typically made from rose petals", deck_id: 36, user_id: 3)
Card.create!(side_a: "Autochthonous", side_b: "indigenous rather than descended from migrants or colonists", deck_id: 36, user_id: 3)
Card.create!(side_a: "Autolysis", side_b: "self-digestion", deck_id: 36, user_id: 3)
Subscription.create!(user_id: 1, deck_id: 36)
Subscription.create!(user_id: 2, deck_id: 36)
Subscription.create!(user_id: 4, deck_id: 36)
Subscription.create!(user_id: 5, deck_id: 36)
