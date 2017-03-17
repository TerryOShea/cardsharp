import { connect } from 'react-redux';
import CardShow from './card_show';
import { updateCard } from '../../actions/card_actions';

const mapDispatchToProps = dispatch => ({
  updateCard: card => dispatch(updateCard(card))
});

export default connect(null, mapDispatchToProps)(CardShow);
