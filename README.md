# CardSharp

[Heroku link](https://card-sharp.herokuapp.com/)

[Trello link](https://trello.com/b/KjRtCQsy/cardsharp)

## Minimum Viable Product

CardSharp is a web application inspired by the flash card site Brainscape. By 5pm
on Friday, March 24th, it will at the least meet the following criteria (along with
smooth, unbuggy navigation, adequate seed data, and delightful CSS styling):

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Create/delete decks
- [ ] Study decks
- [ ] Tags/categories
- [ ] Search
- [ ] Production README

## Design Docs
* [View Wireframes](docs/wireframes)
* [React Components](docs/component-hierarchy.md)
* [API Endpoints](docs/api-endpoints.md)
* [Database Schema](docs/schema.md)
* [Sample State](docs/sample-state.md)

## Implementation Timeline

### Phase 1: Backend Setup and Frontend User Authentication (2 days)

**Objective:** Functioning Rails project with frontend authentication

### Phase 2: Card Model, API, and components (2 days)

**Objective:** Cards can be created, read, updated, or destroyed

### Phase 3: Decks

**Objective:** Cards are grouped into decks--CRUD 'em

### Phase 4: Tags

**Objective:** Decks can be tagged with multiple (searchable) tags

### Phase 5: "Study mode" for decks

**Objective:** Craft an interactive card-flipping, deck-traversing experience

### Phase 6: Search by tag

**Objective:** Allow users to find public decks by searching tags

### Bonus Features (TBD)
- [ ] Decks "decay" if unstudied
- [ ] Badges
- [ ] Animation
