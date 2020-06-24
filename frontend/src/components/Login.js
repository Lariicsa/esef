import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AUTH_SERVICE from '../services/auth';
import { MyContext } from '../context';

class Login extends Component {
  state = {
    user: { username: "lara", password: "123" }
  }

  handleInput = (e) => {
    const { user } = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({ user });
  }

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        this.context.logUser(response.data.user);
        this.props.history.push('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="columns is-centered is-vcentered hv is-mobile">
          <div className="column box animated is-6">
          
            <form className="columns" onSubmit={this.onSubmit}>
              <div className="column is-12">
                <h1 className="title is-2">Ingresar</h1>
                <div className="field">
                  <label className="label">Nombre de usuario:</label>
                  <input className="input ironInput" onChange={this.handleInput} type="text" name="username" />
                </div>
                <div className="field">
                  <label className="label">Contraseña:</label>
                  <input className="input ironInput" onChange={this.handleInput} type="password" name="password" />
                </div>
                <div className="field">
                  <p>Si aún no tiene registro de cuenta en el sistema, puede hacerlo <Link to={"/signup"}>aquí</Link></p>
                </div>

                <div className="field">
                  <input className="button is-primary is-fullwidth" type="submit" value="Login" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextType = MyContext;

export default Login;