import { connect } from 'react-redux';
import TrainingSidebar from './training_sidebar';
import { fetchDecks } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  deckTitle: state.deckShow.title,
  otherDecks: Object.keys(state.decks)
    .map(id => {
      return { id: parseInt(id), title: state.decks[id].title }
    })
    .filter(item => item.id !== state.deckShow.id)
    .sort((a, b) => a.title > b.title),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: id => dispatch(fetchDecks({ authorId: id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingSidebar);
