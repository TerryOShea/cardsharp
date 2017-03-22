import { connect } from 'react-redux';
import SearchPage from './search_page';

const mapStateToProps = state => ({
  tagName: state.tagShow.name,
  resultDecks: Object.keys(state.tagShow.decks).map(id => state.tagShow.decks[id])
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
