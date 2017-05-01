import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.location.pathname === '/login' ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formData => (
    dispatch(ownProps.location.pathname === '/login' ? login(formData) : signup(formData))
  ),
  login: data => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
