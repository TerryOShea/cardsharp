import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      password: ""
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { processForm, router } = this.props;
    processForm(this.state).then(() => router.push("/profile"));
  }

  processErrors(errors) {
    if (!errors) return "";
    const errorItems = [];
    errors.forEach(error => errorItems.push(
      <li key={error}>{error}</li>
    ));
    return (<ul>{errorItems}</ul>);
  }

  render() {
    const { formType, errors } = this.props;
    const title = formType === 'login' ? "Log In" : "Sign Up";
    const errorsList = this.processErrors(errors);

    return (
      <div className="session-form-container">
        <h3>{title}</h3>
        {errorsList}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.update('username')} />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
