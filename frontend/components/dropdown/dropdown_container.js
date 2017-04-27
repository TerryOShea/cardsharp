import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dropdown from './dropdown';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
