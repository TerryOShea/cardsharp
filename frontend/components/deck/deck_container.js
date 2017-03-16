import { connect } from 'react-redux';
import Deck from './deck';
import { fetchDeck } from '../../actions/deck_show_actions';

const mapStateToProps = state => ({
  deckId: state.deckShow.id,
  cards: Object.keys(state.deckShow.cards).map(id => state.deckShow.cards[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDeck: () => dispatch(fetchDeck(ownProps.params.deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
