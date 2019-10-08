import React, { Component } from 'react';
import { MyContext } from '../context/index';
import MAIN_SERVICE from '../services/main';
import Layout from '../components/Layout';
import Groups from './groups/Groups';

export default class Dashboard extends Component {

  state = {
    user: {},
    addClass: false,
    isLoading: true
  }

  getUser = async() => {
    const response = await MAIN_SERVICE.getUser(this.context.state.loggedUser)
    this.setState(
          { user: response.data.user, isLoading: false }
        )
  }

  // getUser = async () => {
  //   const userData = this.context.state.loggedUser
  //   const id = userData._id
  //   const response = await axios.get(`http://localhost:3000/api/user/${id}`)
  //   this.setState(
  //     { user: response.data.user }
  //   )
  // }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    this.getUser()
  }

  toggleMenu = () => {
    this.setState(prevState => ({ addClass: !prevState.addClass }));
  }

  render() {
    const {user, isLoading} = this.state 
    //const {groups} = user
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
                    {isLoading &&   <div className="myloaderContainer">
                      <span className="myloader"></span>
                    </div>}
                    
                      <h2 className="subtitle is-4">Hola, Prof. <span className="title is-3">{user.username} {user.lastname1}</span></h2>

                      <hr />

                      <h3 className="title is-">Resumen de tu información </h3>

                      <h4 className="subtitle is-4">Tus grupos</h4>
                      <Groups />
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