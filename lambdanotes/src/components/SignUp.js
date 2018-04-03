import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = _ => {
    const { username, password } = this.state;
    this.props.handleNewUser(username, password);
    this.setState({ title: '', body: '', });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="SignIn">
      <h2 className="SectionTitle">Sign Up</h2>
      <form onSubmit={this.handleSubmit}>
        <input
          className="SignIn-UsernameBox"
          value={username}
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
          minLength="4"
          maxLength="32"
          required
        />
        <br />
        <input
          className="SignIn-PasswordBox"
          value={password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
          minLength="4"
          maxLength="32"
          required
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
      </div>
    );
  };
}

export default SignUp;