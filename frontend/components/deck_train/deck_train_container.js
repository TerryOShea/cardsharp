import { connect } from 'react-redux';
import DeckTrain from './deck_train';
import { fetchDeckShow, deleteDeckShow } from '../../actions/deck_show_actions'

const mapStateToProps = state => ({
  deck: state.deckShow,
  cards: Object.keys(state.deckShow.cards).map(id => state.deckShow.cards[id])
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: id => dispatch(fetchDeckShow(id)),
  removeDeck: () => dispatch(deleteDeckShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckTrain);
