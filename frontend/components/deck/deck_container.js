import { connect } from 'react-redux';
import Deck from './deck';
import { fetchDeck } from '../../actions/deck_show_actions';

const mapStateToProps = state => ({
  deck: state.deckShow
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDeck: () => dispatch(fetchDeck(ownProps.params.deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
