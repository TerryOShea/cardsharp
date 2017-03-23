import { connect } from 'react-redux';
import DeckIndexItem from './deck_index_item';
import { deleteDeck, deleteSubscription } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id)),
  deleteSubscription: deckId => dispatch(deleteSubscription(deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndexItem);
