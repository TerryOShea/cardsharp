import { connect } from 'react-redux';
import ItemTooltip from './item_tooltip';
import { deleteDeck } from '../../actions/deck_actions';

const mapDispatchToProps = dispatch => ({
  deleteDeck: id => dispatch(deleteDeck(id))
});

export default connect(null, mapDispatchToProps)(ItemTooltip);
