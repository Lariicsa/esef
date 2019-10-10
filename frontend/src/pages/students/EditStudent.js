import React, { Component } from 'react';
import { MyContext } from '../../context';
import MAIN_SERVICE from '../../services/main'
import axios from 'axios';
import Layout from '../../components/Layout';

export default class EditStudent extends Component {

    state = {
        student: {
            level: '',
            group: '',
            name: '',
            lastname1: '',
            lastname2: '',
            age: 0,
            gender: '',
        },

    }

    handleInput = e => {
        const { student } = this.state;
        const key = e.target.name;
        student[key] = e.target.value;
        this.setState({ student })
    }


    updateStudent = async (e) => {
        try {
            e.preventDefault()
            const response = await MAIN_SERVICE.update(this.state.student)
            this.setState({ student: this.state.student })
            console.log(response.status)
            this.props.history.push('/students/all')

        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount = async () => {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
        const { id } = this.props.match.params
        const { data: { student } } = await axios.get(`http://localhost:3000/api/students/${id}`)
        this.setState({
            student
        })
    }

    render() {
        const { student } = this.state

        return (
            <Layout>
                <div className="columns box is-centered">
                    <div className="column is-12">
                        <div className="columns is-right">
                            <div className="column is-12">
                                <h2 className="title is-1 has-text-right">Editar Estudiante</h2>
                            </div>
                        </div>
                        <form className="box" onSubmit={this.updateStudent}>
                            <div className="field">
                                <label className="label">Grado</label>
                                <div className="select">
                                    <select name="level" value={student.level} onChange={this.handleInput} >
                                        <option value="1ro">1ro</option>
                                        <option value="2do">2do</option>
                                        <option value="3ro">3ro</option>
                                        <option value="4to">4to</option>
                                        <option value="5to">5to</option>
                                        <option value="6to">6to</option>
                                    </select>
                                </div>

                                <div className="select">
                                    <select name="group" value={student.group} onChange={this.handleInput} >
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </select>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Nombre(s):</label>
                                <input className="input"

                                    onChange={this.handleInput}
                                    value={student.name}
                                    type='text'
                                    name='name'
                                />
                            </div>
                            <div className="field">
                                <label className="label">Apellido paterno:</label>
                                <input className="input"

                                    onChange={this.handleInput}
                                    value={student.lastname1}
                                    type='text'
                                    name='lastname1'
                                />
                            </div>

                            <div className="field">
                                <label className="label">Apellido materno:</label>
                                <input className="input"

                                    onChange={this.handleInput}
                                    value={student.lastname2}
                                    type='text'
                                    name='lastname2'
                                />
                            </div>

                            <div className="field">
                                <label className="label">Edad:</label>
                                <input className="input"

                                    onChange={this.handleInput}
                                    value={student.age}
                                    type='number'
                                    name='age'
                                />
                            </div>

                            <div className="field">
                                <label className="label">Género:</label>
                                <div className="select">
                                    <select name="gender" value={student.gender} onChange={this.handleInput} >
                                        <option disabled ></option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                    </select>
                                </div>
                            </div>
                            <div className="columns is-right">
                                <div className="column is-6 is-offset-6">
                                    <div className="field">
                                        <button className="button is-fullwidth is-primary" type='submit'>Actualizar datos</button>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </Layout>
        );
    }
}

EditStudent.contextType = MyContext;