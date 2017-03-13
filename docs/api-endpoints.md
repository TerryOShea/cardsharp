# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users
- `POST /api/users`
- `PATCH /api/users`

### Session
- `POST /api/session`
- `DELETE /api/session`

### Cards
- `POST /api/decks/:deckId/cards`
- `GET /api/decks/:deckId/cards`
- `PATCH /api/decks/:deckId/cards/:id`
- `DELETE /api/decks/:deckId/cards/:id`

### Decks
- `GET /api/decks`
- `POST /api/decks`
- `GET /api/decks/:id`
- `DELETE /api/decks/:id`
- `GET /api/decks/:id/cards`
  - index of all cards for a deck
  - accepts pagination params (if I get there)

### Tags
- A deck's tags will be included in the deck show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/decks/:note_id/tags`: add tag to deck by name
- `DELETE /api/decks/:note_id/tags/:tag_name`: remove tag from note by
  name
