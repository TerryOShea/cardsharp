import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import DecksReducer from './decks_reducer';
import DeckShowReducer from './deck_show_reducer';
import TagsReducer from './tags_reducer';
import TagShowReducer from './tag_show_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  decks: DecksReducer,
  deckShow: DeckShowReducer,
  tags: TagsReducer,
  tagShow: TagShowReducer
});

export default RootReducer;
