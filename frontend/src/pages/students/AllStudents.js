import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout';
import MAIN_SERVICE from '../../services/main';

export default class AllStudents extends Component {

    state = {
        students: undefined,
        group: undefined
    }

    getStudents = async () => {
        const response = await MAIN_SERVICE.getStudents()
        this.setState({
            students: response.data.students
        })
    }

    getGroups = async () => {
        const { id } = this.props.match.params
        const { data: { group } } = await axios.get(`http://localhost:3000/api/groups/${id}`)
        this.setState({
            group
        })
    }

    deleteStudent = async (id) => {
        // axios.delete(`http://localhost:3000/api/students/${id}`, { data: { id } })
        await MAIN_SERVICE.deleteStudent(id)
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
        this.getGroups()
    }
    componentDidUpdate() {
        this.deleteStudent()
    }

    render() {
        const { students, group } = this.state;
        console.log(group);

        return (
            <Layout>
                <div className="columns box is-centered">
                    <div className="column is-12">
                        <div className="columns is-right">
                            <div className="column is-12">
                                <h2 className="title is-1 has-text-right">Todos los Alumnos</h2>
                            </div>
                        </div>
                        <div className="columns is-right">
                        <div className="column is-12">
                                <div className="buttons is-right">
                                    <Link className="button is-rounded is-primary" to={'/students/addstudent'}>
                                        <span>Añadir Alumnos</span>
                                        <span className="icon is-small">
                                            <i className="fa fa-plus"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="table-wrapper">
                            <table className="table is-fullwidth ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nombre</th>
                                        <th>Edad</th>
                                        <th>Género</th>
                                        <th>Status</th>
                                        <th></th>
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

                                            {/* {timesMeasure === 0 &&
                                                                
                                                            } */}
                                            <td><span className="tag is-warning">1ra medición</span></td>
                                            <td>
                                                <Link to={'/students/addmeasurement'} onClick={() => this.getStudentId(student._id)}>Agregar mediciones</Link>
                                            </td>
                                            <td>
                                                <div className="laraMore icon is-medium">
                                                    <i className="fa fa-ellipsis-h"></i>
                                                    <div className="laraMore-container">
                                                        <Link className="button is-text" to={`/students/students/edit/${student._id}`}>
                                                            Editar datos
                                                                </Link>
                                                        <span className="button is-text" onClick={() => this.deleteStudent(student._id)}>
                                                            Eliminar Alumno
                                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </Layout>
        );
    }
}

AllStudents.contextType = MyContext;