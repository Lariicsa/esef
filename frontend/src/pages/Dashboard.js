import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../context/index';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

export default class Dashboard extends Component {

  state = {
    user: {}
  }

  getUser = async () => {
    const userData = this.context.state.loggedUser
    const id = userData._id
    const response = await axios.get(`http://localhost:3000/api/users/${id}`)
    this.setState(
      { user: response.data.user }
    )
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    this.getUser()
  }

  render() {
    const user = this.state.user
    const groups = this.state.user.groups
    console.log('user', user)
    console.log('groups', groups)
    return (
      <>
        <div className="columns is-centered">
          <div className="column">
            <Sidebar />
          </div>
          <div className="column box is-10">
            <div className="columns">
              <div className="column is-12">
                <div className="column">
                  <h2 className="title is-2">{user.username} {user.lastname1}</h2>

                  <hr />

                  <h3 className="title is-3"> Tus grupos</h3>
                  <ul className="laraContainer">
                    {groups && groups.map((group, i) =>
                      <li key={i}>
                        <Link to={`/groups/all/${group._id}`}>
                          <h2 className="title is-1">
                            {group.level} <span className="subtitle is-2">{group.group}</span>
                          </h2>
                        </Link>
                      </li>

                    )}
                    <li>
                      <Link to={'/groups/addgroup'}>
                        Agregar grupo nuevo
                      <em className="is-size-1">+</em>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Dashboard.contextType = MyContext;