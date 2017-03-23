import { connect } from 'react-redux';
import Profile from './profile';
import { fetchDecks, createSubscription } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.session.currentUser,
  decks: Object.keys(state.decks).map(id => state.decks[id]).sort((a, b) => {
    return new Date(b.updated) - new Date(a.updated);
  })
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: id => dispatch(fetchDecks({ authorId: id })),
  createSubscription: id => dispatch(createSubscription(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
