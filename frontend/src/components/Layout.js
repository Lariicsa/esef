import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { MyContext } from '../context';
import axios from 'axios';

export default class Layout extends Component {

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

        this.getUser()
      }

    render() {
        return (
            <>
            <Sidebar history={this.props.history} profesorName={this.state.user.username} />
            {this.props.children}
            </>
        )
    }
}

Layout.contextType = MyContext;