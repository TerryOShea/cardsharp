import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeckShow, deleteDeckShow, updateDeckShow } from '../../actions/deck_show_actions';

const mapStateToProps = state => ({
  deck: state.deckShow,
  cards: Object.keys(state.deckShow.cards).map(id => state.deckShow.cards[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDeck: () => dispatch(fetchDeckShow(ownProps.params.deckId)),
  removeDeck: () => dispatch(deleteDeckShow()),
  updateDeck: deck => dispatch(updateDeckShow(deck))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);
