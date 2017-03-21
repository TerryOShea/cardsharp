import { connect } from 'react-redux';
import DeckIndexItem from './deck_index_item';
import { deleteDeck } from '../../actions/deck_actions';

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(null, mapDispatchToProps)(DeckIndexItem);
