import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../context/index';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

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
    this.setState(prevState => ({ addClass: !prevState.addClass}));
  }

  render() {
    const user = this.state.user
    const groups = this.state.user.groups
    console.log(user);
    console.log(this.state);
    

    let openClass = ["column laraBar"];
    if(this.state.addClass) {
      openClass.push('open');
    }
    return (
      <>
        <div className="columns is-centered">
          <div className={openClass.join(' ')}>
            <Sidebar history={this.props.history} />
          </div>
          <div className="column box is-10">
          <p onClick={this.toggleMenu}> abre</p>
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