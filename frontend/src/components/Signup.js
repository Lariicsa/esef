import React, { Component } from 'react';
import AUTH_SERVICE from '../services/auth';

class Signup extends Component {
  state = {
    user: {
      userMsg: ''
    }
  };

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.signup(this.state.user)
      .then((response) => {
        let userMsg = response.data.msg
        this.props.history.push('/login');
        console.log(userMsg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {userMsg} = this.state.user
    return (
      <div className="columns is-centered">
        <div className="column box is-10">
          <p className="mesaage is-success">{userMsg}</p>
          <form className="columns" onSubmit={this.onSubmit}>
            <div className="column is-7 iron-cover">
              <h1 className="title is-2">Sign up</h1>
              <div className="field">
                <label className="label">Name:</label>
                <input className="input" onChange={this.handleInput} type="text" name="username" />
              </div>

              <div className="field">
                <label className="label">Apellido paterno:</label>
                <input className="input" onChange={this.handleInput} type="text" name="lastname1" />
              </div>

              <div className="field">
                <label className="label">Apellido materno:</label>
                <input className="input" onChange={this.handleInput} type="text" name="lastname2" />
              </div>

              <div className="field">
                <label className="label">Correo:</label>
                <input className="input" onChange={this.handleInput} type="email" name="email" />
              </div>

              <div className="field">
                <label className="label">Password:</label>
                <input className="input" onChange={this.handleInput} type="password" name="password" />
              </div>
            </div>
            <div className="column iron-cover">
              <div className="column iron-between">
                <div className="columns ironForms ironForms-buttons">
                  <h2 className="title is-4">Hello</h2>
                  <h3>ESEF</h3>
                </div>
                <div className="columns">
                  <input className="button is-primary is-fullwidth" type="submit" value="Signup" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
