import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom'

export default class AllGroups extends Component {

    state = {
        groups: undefined
    }

    getGroups = async () => {
        const response = await axios.get('http://localhost:3000/api/groups')
        this.setState({
            groups: response.data.groups
        })
    }

    componentDidMount() {
        this.getGroups()
    }

    render() {
        const { groups } = this.state;
        console.log(this.state);

        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
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