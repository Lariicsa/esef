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
    //const groups = this.state.user.groups
    console.log(user);
    console.log(this.state);
    

    let openClass = ["column laraBar laraSide"];
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
          {/* <p onClick={this.toggleMenu}> abre</p> */}
            <div className="columns is-centered  laraContent">
              <div className="column is-12">
                <div className="column">
                  <h2 className="subtitle is-4">Hola, <span className="title is-3">{user.username} {user.lastname1}</span></h2>

                  <hr />

                  <h3 className="title is-3"> Tus grupos</h3>
                  <ul className="laraContainer">
                    <li>
                      <h4>Tus grupos</h4>
                    </li>
                    <li><h4>Total de Alumnos</h4>

                    </li>
                    <li>Últimos bla</li>
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