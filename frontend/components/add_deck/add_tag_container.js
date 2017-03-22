import { connect } from 'react-redux';
import AddTag from './add_tag';
import { fetchTags } from '../../actions/tag_actions';

const mapStateToProps = state => ({
  tags: Object.keys(state.tags).map(id => state.tags[id])
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);
