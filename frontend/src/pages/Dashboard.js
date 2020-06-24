import React, { Component } from 'react';
import { MyContext } from '../context/index';
import { Link } from 'react-router-dom'
import MAIN_SERVICE from '../services/main';
import Layout from '../components/Layout';

export default class Dashboard extends Component {

  state = {
    user: {},
    addClass: false,
    isLoading: true
  }

  getUser = async () => {
    const response = await MAIN_SERVICE.getUser(this.context.state.loggedUser)
    this.setState(
      { user: response.data.user, isLoading: false }
    )
  }

  getGroupsLength = async () => {
    const { groups } = this.state.user
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    this.getUser()
  }

  toggleMenu = () => {
    this.setState(prevState => ({ addClass: !prevState.addClass }));
  }

  render() {
    const { user, isLoading } = this.state
    const groups = this.state.user.groups
    console.log(groups);

    let openClass = ["laraBar"];
    if (this.state.addClass) {
      openClass.push('open');
    }
    return (
      <Layout>
        <div className="columns box is-centered">
          {isLoading && <div className="myloaderContainer">
            <span className="myloader"></span>
          </div>}
          <div className="column is-12">
            <div className="columns is-right">
              <div className="column is-12">
                <h2 className="title is-1 has-text-right">Resumen</h2>
              </div>
            </div>
            <div className="box">
              <h2 className="title is-3">Información de contacto</h2>
              <p className="subtitle is-3">Nombre:{user.username} {user.lastname1}</p>
              <p className="subtitle is-4">e-mail:{user.email}</p>
            </div>
            <div className="box">
              <h2 className="title is-3">Grupos</h2>
              <ul className="laraGroups">
                {groups && groups.map((group, i) =>
                  <li key={i} className="box animated">
                    <Link to={`/groups/all/${group._id}`}>
                      <div className="laraCircle">
                          {group.level} {group.group}
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Dashboard.contextType = MyContext;