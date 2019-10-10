import React, { Component } from 'react'
import Navbar from './Navbar'
import { MyContext } from '../context';


export default class Layout extends Component {

  render() {
    return (

      <MyContext.Consumer>
        {({ state }) => (
          <>
            <Navbar history={this.props.history} profesorName={state.loggedUser && state.loggedUser.username} />
            <div className="container">
              <section className="section">
                {this.props.children}
              </section>
            </div>
            <footer className="footer">
              <div className="columns is-centeredentered is-vc">
                <div className="column is-12">
                <p className="has-text-centered">Made with love, tears & fun in Ironhack by Larissa Avila</p>
                </div>
              </div>
            </footer>
          </>
        )
        }
      </MyContext.Consumer>

    )
  }
}

Layout.contextType = MyContext;