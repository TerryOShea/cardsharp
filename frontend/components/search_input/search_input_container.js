import { connect } from 'react-redux';
import SearchInput from './search_input';
import { fetchTags, fetchTagShow } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  tags: Object.keys(state.tags).map(id => state.tags[id])
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchTagShow: name => dispatch(fetchTagShow(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
