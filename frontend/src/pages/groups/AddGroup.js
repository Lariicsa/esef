import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Layout from '../../components/Layout';

export default class AddGroup extends Component {

    state = {
        group: {
            level: '',
            group: ''
        },
        user: {},
        response: undefined
    }

    componentDidMount() {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
    }

    addGroup = async e => {
        e.preventDefault()
        const body = this.state
        const response = await axios.post('http://localhost:3000/api/groups', body)
        this.setState({
            response: response.data.msg
        })
        console.log(response.data.msg);
    }

    handleInput = e => {
        this.setState({
            group: {
                ...this.state.group,
                [e.target.name]: e.target.value
            },
            user: this.context.state.loggedUser
        })
    }

    render() {
        const { group } = this.state

        return (
            <Layout>
                <section className="section">
                    <div className="container">

                        <div className="columns is-centered">

                            <div className="column box is-12">
                                <div className="columns is-centered laraContent">
                                    <div className="column is-8">
                                        <div className="box">
                                            <h1 className="title is-1">Añadir nuevo grupo</h1>
                                            <form onSubmit={this.addGroup}>

                                                <div className="field">
                                                    <div className="field-body">

                                                        <div className="select is-fullwidth">
                                                            <select name="level" value={group.level} onChange={this.handleInput} >
                                                                <option disabled ></option>
                                                                <option value="1ro">1ro</option>
                                                                <option value="2do">2do</option>
                                                                <option value="3ro">3ro</option>
                                                                <option value="4to">4to</option>
                                                                <option value="5to">5to</option>
                                                                <option value="6to">6to</option>
                                                            </select>
                                                        </div>

                                                        <div className="select is-fullwidth">
                                                            <select name="group" value={group.group} onChange={this.handleInput} >
                                                                <option disabled ></option>
                                                                <option value="A">A</option>
                                                                <option value="B">B</option>
                                                                <option value="C">C</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="field">
                                                    <button className="button is-fullwidth is-primary" type='submit'>Añadir</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

AddGroup.contextType = MyContext;