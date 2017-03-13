```js
{
  currentUser: {
    id: 1,
    username: "terry",
    followed_decks: []
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: [] },
    createDeck: { errors: ["title can't be blank"] },
    createCard: { errors: [] }
  },
  decks: {
    1: {
      title: "Intermediate Italian",
      description: "for ITA 302 with Signora Moretti",
      is_private: false,
      author_id: 1,
      tags: {
        1: {
          id: 1,
          name: "Romance Languages"
        }
      }
    }
  },
  card: {
    1: {
      id: 1,
      side_a: "un cestino",
      side_b: "a trash can",
      side_a_img: "",
      side_b_img: ""
      mastery: 3,
      author_id: 1,
      deck_id: 1
    }
  },
  tagFilters: [1, 3, 6] // Used to track selected tags for deck filtering
}
```
