import { connect } from 'react-redux';
import CardShow from './card_show';
import { updateMastery } from '../../actions/card_actions';

const mapDispatchToProps = dispatch => ({
  updateCard: card => dispatch(updateMastery(card))
});

export default connect(null, mapDispatchToProps)(CardShow);
