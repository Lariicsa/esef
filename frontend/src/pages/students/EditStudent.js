import React, { Component } from 'react';
import { MyContext } from '../../context';
import MAIN_SERVICE from '../../services/main'
import Sidebar from '../../components/Sidebar';
import axios from 'axios';

export default class EditStudent extends Component {

    state = {
        student: {},

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
            <>
                <Sidebar history={this.props.history} />
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column box is-12">
                                <div className="columns is-centered laraContent">
                                    <div className="column is-12">
                                        <div className="columns is-centered">
                                            <div className="column box is-8">
                                                <form onSubmit={this.updateStudent}>
                                                    <div className="field">
                                                        <label className="label">Grado</label>
                                                        <div className="select">
                                                            <select name="level" value={student.level} onChange={this.handleInput} >
                                                                <option disabled ></option>
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
                                                                <option disabled ></option>
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

                                                    <div className="field">
                                                        <button className="button is-fullwidth is-primary" type='submit'>Actualizar datos</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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

EditStudent.contextType = MyContext;