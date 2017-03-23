import { connect } from 'react-redux';
import AddCard from './add_card';
import { createCard } from '../../actions/card_actions';

const mapStateToProps = state => ({
  deckId: state.deckShow.id,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createCard: card => dispatch(createCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
