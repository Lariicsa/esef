import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Layout from '../../components/Layout';


export default class AddSchool extends Component {

    state = {
        school: {
            school: {
                name: '',
                schoolId: '',
                principal: ''
            },
            user: {},
            response: undefined
        }
    }

    addSchool = async e => {
        e.preventDefault()
        const body = this.state
        const response = await axios.post('http://localhost:3000/api/schools', body)
        this.setState({
            response: response.data.msg
        })
        console.log(response.data.msg);
    }

    handleInput = e => {
        this.setState({
            school: {
                ...this.state.school,
                [e.target.name]: e.target.value
            },
            user: this.context.state.loggedUser
        })
    }

    render() {
        const { school } = this.state
        console.log(school);

        return (
            <Layout>
                <div className="column box is-10">
                    <h1 className="title is-1">Agregar escuela</h1>
                    <div className="columns">
                        <div className="column is-6">
                            <form onSubmit={this.addSchool}>

                                <div className="field">
                                    <label className="label">Nombre:</label>
                                    <input className="input"
                                        required
                                        onChange={this.handleInput}
                                        value={school.name}
                                        type='text'
                                        name='name'
                                    />
                                </div>
                                <div className="field">
                                    <label className="label">Nombre del Director (a):</label>
                                    <input className="input"
                                        required
                                        onChange={this.handleInput}
                                        value={school.principal}
                                        type='text'
                                        name='principal'
                                    />
                                </div>
                                <div className="field">
                                    <label className="label">Clave:</label>
                                    <input className="input"
                                        required
                                        onChange={this.handleInput}
                                        value={school.schoolId}
                                        type='text'
                                        name='schoolId'
                                    />
                                </div>

                                <div className="field">
                                    <button className="button is-fullwidth is-primary" type='submit'>Agregar Escuela</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

AddSchool.contextType = MyContext;