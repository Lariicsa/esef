import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom'

export default class AllGroups extends Component {

    state = {
        user: {}
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

    render() {
        const groups = this.state.user.groups
        console.log(groups);

        return (
            <div className="columns is-centered">
                <div className="column">
                <Sidebar history={this.props.history} />
                </div>
                <div className="column box is-10">
                    <h3 className="title is-3">Todos los grupos</h3>
                    <ul className="laraContainer" >
                        {groups && groups.map((group, i) =>

                            <li key={i}>
                                <Link to={`/groups/all/${group._id}`}>
                                    <h2 className="title is-1">
                                        {group.level} <span className="subtitle is-2">{group.group}</span>
                                    </h2>
                                </Link>
                            </li>

                        )}
                    </ul>

                </div>
            </div>
        );
    }
}

AllGroups.contextType = MyContext;