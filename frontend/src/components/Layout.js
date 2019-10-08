import React, { Component } from 'react'
import Sidebar from './Navbar'
import { MyContext } from '../context';


export default class Layout extends Component {

    render() {
      
        return (
            <MyContext.Consumer>
            {({state}) => (
              <>
                <Sidebar history={this.props.history} profesorName={state.loggedUser && state.loggedUser.username} />
                {this.props.children}
              </>
              )}
            </MyContext.Consumer>
        )
    }
}

Layout.contextType = MyContext;