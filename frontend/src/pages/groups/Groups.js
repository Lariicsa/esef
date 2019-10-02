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


                        {groups && groups.map((group, i) =>
                            <ul key={i}>
                                <li>
                                    <h2 className="title is-1">
                                    {group.level}
                                    </h2>

                                    <h2 className="subtitle is-3">
                                    {group.group}
                                    </h2>

                                <Link to={`/groups/all/${group._id}`}>Ver</Link>
                                </li>
                            </ul>
                        )}


                </div>
            </div>
        );
    }
}

AllGroups.contextType = MyContext;