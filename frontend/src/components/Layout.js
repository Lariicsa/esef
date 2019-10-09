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
            <section className="section">
              <div className="container">
              {this.props.children}
                </div>
              </section>
          </>
    )
  }
          </MyContext.Consumer>
       
    )
  }
}

Layout.contextType = MyContext;