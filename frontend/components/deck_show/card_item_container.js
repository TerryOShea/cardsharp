import { connect } from 'react-redux';
import CardItem from './card_item';
import { updateCard } from '../../actions/card_actions';

const mapDispatchToProps = dispatch => ({
  updateCard: card => dispatch(updateCard(card))
});

export default connect(null, mapDispatchToProps)(CardItem);
