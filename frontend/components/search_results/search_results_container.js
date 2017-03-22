import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = state => ({
  tagName: state.tagShow.name,
  resultDecks: Object.keys(state.tagShow.decks).map(id => state.tagShow.decks[id])
});

export default connect(mapStateToProps)(SearchResults);
