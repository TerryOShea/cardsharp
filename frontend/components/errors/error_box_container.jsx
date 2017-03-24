import { connect } from 'react-redux';
import ErrorBox from './error_box';

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(ErrorBox);
