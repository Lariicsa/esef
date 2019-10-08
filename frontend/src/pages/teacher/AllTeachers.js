import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Layout from '../../components/Layout';

export default class AllTeachers extends Component {

    state = {
        users: undefined
    }

    getTeachers = async () => {
        const response = await axios.get('http://localhost:3000/api/users')
        this.setState({
            users: response.data.users
        })
    }

    componentDidMount() {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
        this.getTeachers()
    }


    render() {
        const { users } = this.state;
        //const groups = this.state.user.groups
        console.log(users);

        return (
            <Layout>
                <div className="column is-10">
                    <table className="table is-fullwidth table-wrapper">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Número de grupos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {users && users.map((user, i) =>
                                <tr key={i}>
                                    <td>{user.username} {user.lastname1} {user.name2}</td>
                                    <td>{user.groups}</td>
                                </tr>
                            )} */}
                        </tbody>
                    </table>
                </div>
            </Layout>
        );
    }
}

AllTeachers.contextType = MyContext;