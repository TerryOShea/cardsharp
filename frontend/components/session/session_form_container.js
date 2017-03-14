import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.session.errors,
  formType: ownProps.location.pathname === '/login' ? 'login' : 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formData => (
    dispatch(ownProps.location.pathname === '/login' ? login(formData) : signup(formData))
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
