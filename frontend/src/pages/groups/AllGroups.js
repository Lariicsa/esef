import React, { Component } from 'react'
import { MyContext } from '../../context';
//import axios from 'axios';
import Layout from '../../components/Layout';
import Groups from './Groups';

export default class AllGroups extends Component {
    // state = {
    //     user: {}
    // }

    // getUser = async () => {
    //     const userData = this.context.state.loggedUser
    //     const id = userData._id
    //     const response = await axios.get(`http://localhost:3000/api/user/${id}`)
    //     this.setState(
    //         { user: response.data.user }
    //     )
    // }

    // componentDidMount() {
    //     if (!this.context.state.loggedUser) return this.props.history.push('/login')
    //     this.getUser()
    // }
    render() {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-12">
                                <div className="columns is-centered laraContent">
                                    <div className="column is-12">
                                        <h3 className="title is-3">Todos los grupos</h3>
                                        <Groups />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

AllGroups.contextType = MyContext;
