import { connect } from 'react-redux';
import TrainingSidebar from './training_sidebar';
import { fetchDecks } from '../../actions/deck_actions';
import { fetchDeckShow } from '../../actions/deck_show_actions';

const mapStateToProps = state => ({
  deckTitle: state.deckShow.title,
  otherDecks: Object.keys(state.decks)
    .map(id => {
      return { id: parseInt(id), title: state.decks[id].title, numCards: state.decks[id].numCards }
    })
    .filter(item => item.id !== state.deckShow.id && item.numCards !== 0)
    .sort((a, b) => a.title > b.title),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: id => dispatch(fetchDecks({ authorId: id })),
  fetchDeck: id => dispatch(fetchDeckShow(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingSidebar);
