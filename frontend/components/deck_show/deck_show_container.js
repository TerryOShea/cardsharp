import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeckShow, deleteDeckShow, updateDeckShow } from '../../actions/deck_show_actions';
import { createSubscription, deleteSubscription } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  deck: state.deckShow,
  cards: Object.keys(state.deckShow.cards).map(id => state.deckShow.cards[id]),
  tags: Object.keys(state.deckShow.tags).map(id => state.deckShow.tags[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchDeck: () => dispatch(fetchDeckShow(ownProps.params.deckId)),
  removeDeck: () => dispatch(deleteDeckShow()),
  updateDeck: deck => dispatch(updateDeckShow(deck)),
  createSubscription: subscription => dispatch(createSubscription(subscription)),
  deleteSubscription: id => dispathc(deleteSubscription(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);
