import { connect } from 'react-redux';
import SearchResultItem from './search_result_item';
import { createSubscription, deleteSubscription } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createSubscription: subscription => dispatch(createSubscription(subscription)),
  deleteSubscription: deckId => dispatch(deleteSubscription(deckId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultItem);
