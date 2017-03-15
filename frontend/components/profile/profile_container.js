import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
