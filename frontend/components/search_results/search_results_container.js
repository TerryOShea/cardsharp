import { connect } from 'react-redux';
import SearchResults from './search_results';
import { fetchPopularTags } from '../../util/tag_api_util';
import { fetchTagShow, clearTagShow } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  tagName: state.tagShow.name,
  resultDecks: Object.keys(state.tagShow.decks).map(id => state.tagShow.decks[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPopularTags: () => fetchPopularTags(),
  fetchTagShow: name => dispatch(fetchTagShow(name)),
  clearTagShow: () => dispatch(clearTagShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
