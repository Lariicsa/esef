import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom'

export default class AllStudents extends Component {

    state = {
        students: undefined
    }

    getStudents = async () => {
        const response = await axios.get('http://localhost:3000/api/students')
        this.setState({
            students: response.data.students
        })
    }

    deleteStudent = (id) => {
        axios.delete(`http://localhost:3000/api/students/${id}`, { data: { id } })
            .then(({ data }) => {
                this.setState(prevState => {
                    return {
                        ...prevState,
                    }
                })
                this.componentDidMount()
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
        this.getStudents()
    }
    componentDidUpdate() {
        this.deleteStudent()
    }

    render() {
        const { students } = this.state;
        console.log(this.state);

        return (
            <>
                <Sidebar history={this.props.history}/>
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column box is-12">
                                <div className="columns is-centered laraContent">
                                    <div className="column is-12">
                                        <div className="table-wrapper">
                                            <table className="table is-fullwidth ">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Nombre</th>
                                                        <th>Edad</th>
                                                        <th>Género</th>
                                                        <th><span className="button"> Editar </span></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {students && students.map((student, i) =>
                                                        <tr key={i}>
                                                            <td>{i}</td>
                                                            <td>{student.name} {student.lastname1} {student.name2}</td>
                                                            <td>{student.age}</td>
                                                            <td>{student.gender}</td>
                                                            <td>
                                                                <p className="button is-danger" onClick={() => this.deleteStudent(student._id)}>Borrar</p>
                                                            </td>
                                                            <td><Link className="button" to={`/students/students/${student._id}`}>Ver</Link></td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
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

AllStudents.contextType = MyContext;