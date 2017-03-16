import { connect } from 'react-redux';
import TrashCard from './trash_card';
import { deleteCard } from '../../actions/card_actions';

const mapDispatchToProps = dispatch => ({
  deleteCard: id => dispatch(deleteCard(id))
});

export default connect(null, mapDispatchToProps)(TrashCard);
