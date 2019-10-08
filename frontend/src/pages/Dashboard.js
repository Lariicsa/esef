import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { MyContext } from '../context/index';
import axios from 'axios';
import Layout from '../components/Layout';

export default class Dashboard extends Component {

  state = {
    user: {},
    addClass: false
  }

  getUser = async () => {
    const userData = this.context.state.loggedUser
    const id = userData._id
    const response = await axios.get(`http://localhost:3000/api/user/${id}`)
    this.setState(
      { user: response.data.user }
    )
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    this.getUser()
  }

  toggleMenu = () => {
    this.setState(prevState => ({ addClass: !prevState.addClass }));
  }

  render() {
    const user = this.state.user
    const groups = this.state.user.groups
    console.log(user);


    let openClass = ["column laraBar laraSide"];
    if (this.state.addClass) {
      openClass.push('open');
    }
    return (
     <Layout>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className={openClass.join(' ')}>
              </div>
              <div className="column box is-12">
                <div className="columns is-centered laraContent">
                  <div className="column is-12">
                    <p className="button is-text burger" onClick={this.toggleMenu}> abre</p>
                    <div className="column">
                      <h2 className="subtitle is-4">Hola, Prof. <span className="title is-3">{user.username} {user.lastname1}</span></h2>

                      <hr />

                      <h3 className="title is-">Resumen de tu información </h3>

                      <h4 className="subtitle is-4">Tus grupos</h4>
                      <ul className="laraContainer">
                        {groups && groups.map((group, i) =>

                          <li key={i} className="x">
                            <Link to={`/groups/all/${group._id}`}>
                              <div className="x">
                                <p>
                                  {group.level} <span>{group.group}</span>
                                </p>
                              </div>
                            </Link>
                          </li>

                        )}
                      </ul>
                      <hr />
                      <h4 className="subtitle is-4">Total de Alumnos</h4>
                      <hr />

                      <h4 className="subtitle is-4">Próxima medición</h4>
                      <strong>Agosto 21 2020</strong>
                      <hr />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </Layout>
    );
  }
}

Dashboard.contextType = MyContext;