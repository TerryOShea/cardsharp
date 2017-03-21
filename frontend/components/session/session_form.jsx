import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import ErrorBox from '../errors/error_box';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault();
    const demoLogin = { username: "Terry", password: "password" };
    const { processForm, router } = this.props;
    processForm(demoLogin).then(() => router.push("/profile"));
  }

  render() {
    const { formType, errors } = this.props;
    const title = formType === 'login' ? "Log In" : "Sign Up";
    const demoButton = formType === 'login' ? (<button onClick={this.demoLogin}>Demo Login</button>) : "";

    return (
      <div className="session-form-container">
        <ErrorBox errors={errors} />
        <h3 className="session-form-title">{title}</h3>
        <form onSubmit={this.handleSubmit} className="session-form">
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
          <section className="session-btns-box">
            <button>Submit</button>
            {demoButton}
          </section>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
