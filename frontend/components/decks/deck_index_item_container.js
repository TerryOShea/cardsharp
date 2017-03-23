import { connect } from 'react-redux';
import DeckIndexItem from './deck_index_item';
import { deleteDeck } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndexItem);
