import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout';

export default class AllGroups extends Component {

    state = {
        user: {},
        isLoading: true
    }

    getUser = async () => {
        const userData = this.context.state.loggedUser
        const id = userData._id
        const response = await axios.get(`https://morning-mountain-24878.herokuapp.com/api/user/${id}`)
        this.setState(
            { user: response.data.user, isLoading: false }
        )
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
        this.getUser()
    }

    render() {
        console.log(this.state.user.groups);
        const { groups, isLoading } = this.state.user

        return (
            <Layout>
                <div className="columns box is-centered">
                    <div className="column is-12">
                        <div className="columns is-right">
                            <div className="column is-12">
                                <h2 className="title is-1 has-text-right">Todos los grupos</h2>
                            </div>
                        </div>

                        <div className="box">
                            <h2 className="title is-3">Grupos</h2>
                            <ul className="laraGroups">
                                {groups && groups.map((group, i) =>
                                    <li key={i} className="box animated">
                                        <Link to={`/groups/all/${group._id}`}>
                                            <div className="laraCircle">
                                                {group.level} {group.group}
                                            </div>
                                        </Link>
                                    </li>
                                )}
                                <li>
                                <Link to={'/groups/addgroup'} className="box add animated"><i class="fa fa-plus-circle"></i></Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </Layout>
        );
    }
}

AllGroups.contextType = MyContext;