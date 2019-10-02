
import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class GroupDetail extends Component {

    state = {
        group: undefined
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
        const { data: { group } } = await axios.get(`http://localhost:3000/api/groups/${id}`)
        this.setState({
            group
        })
    }

    render() {
        const { group } = this.state;

        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
                </div>
                {group &&
                    <div className="column box is-10">
                        <p className="title is-1">{group.level}</p>
                    <p className="title is-1">{group.group}</p>
                    </div>
                }
            </div>
        );
    }
}

GroupDetail.contextType = MyContext;

