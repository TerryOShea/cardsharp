import { connect } from 'react-redux';
import SearchTags from './search_tags';
import { fetchTags } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  tags: Object.keys(state.tags).map(id => state.tags[id])
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchTags);
