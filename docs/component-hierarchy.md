## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
 - DecksContainer (x2: recent decks, popular decks)

**DecksContainer**
 - DecksHeader
  * DeckIndex

**DeckContainer**
 - CardIndex

**SearchResultsContainer**
 - Search
 - DeckIndex

**TagContainer**
 - TagHeader
  + TagIndex

**CardIndex**
 - CardIndexItem
  + CardDetail (x2: side A, side B)

**NewCardContainer**
 - NewCard
  - NewCardButton

**Search**

**NewDeck**
 - NewDeck
  - NewDeckButton

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/deck/:noteId" | "DeckContainer" |
| "/home/deck/:deckId/card/:cardId" | "CardIndexItem" |
| "/home/tag/:tagId" | "DecksContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-deck" | "NewDeckContainer" |
| "deck/:deckId/new-card" | "NewCardContainer" |
| "/search" | "Search" |
| "/new-tag" | "NewTag" |
