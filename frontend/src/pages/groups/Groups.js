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
        console.log(this.state.user.groups);
        const groups = this.state.user.groups

        return (
            <>
                <Sidebar history={this.props.history} profesorName={this.state.user.username} />
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-12">
                                <div className="columns is-centered laraContent">
                                    <div className="column is-12">
                                        <h3 className="title is-3">Todos los grupos</h3>
                                        <ul className="laraContainer" >
                                            {groups && groups.map((group, i) =>
                                                <li key={i} className="animated">
                                                    <Link to={`/groups/all/${group._id}`}>
                                                        <div className="laraCircle">
                                                            <p>
                                                                {group.level} <span>{group.group}</span>
                                                            </p>
                                                        </div>
                                                        <em className="has-text-grey">{group.students.length} alumnos</em>
                                                    </Link>
                                                </li>
                                            )}
                                            <li className="animated">
                                                <Link to={'/groups/addgroup'}>
                                                    <div className="laraCircle">
                                                        <p>
                                                            Agregar grupo
                                                    <span class="fa fa-plus-circle"></span>
                                                        </p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

AllGroups.contextType = MyContext;