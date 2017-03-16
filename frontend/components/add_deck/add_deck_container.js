import { connect } from 'react-redux';
import AddDeck from './add_deck';
import { createDeck } from '../../actions/deck_actions';

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck))
});

export default connect(null, mapDispatchToProps)(AddDeck);
