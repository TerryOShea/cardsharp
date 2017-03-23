import { connect } from 'react-redux';
import SearchResults from './search_results';
import { fetchPopularTags } from '../../util/tag_api_util';
import { fetchTagShow, clearTagShow } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  tagName: state.tagShow.name,
  resultDecks: Object.keys(state.decks)
                 .map(id => state.decks[id])
                 .sort((deckA, deckB) => deckA.num_subscribers < deckB.num_subscribers),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPopularTags: () => fetchPopularTags(),
  fetchTagShow: name => dispatch(fetchTagShow(name)),
  clearTagShow: () => dispatch(clearTagShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
