import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Layout from '../../components/Layout';

export default class GroupDetail extends Component {

    state = {
        group: {},
        timesMeasure: undefined
    }

    getStudentId = (studentId) => {
        this.context.setStudentId(studentId);
    }

    getMeasurementsTimes = () => {
        const studentsStatus = this.state.group.students
        studentsStatus.map((student) => {
            let timesMeasure = student.measurements.length
            if (timesMeasure === 1) {
                console.log('Measure once');
                return this.setState({ timesMeasure })
            } else if (timesMeasure === 2) {
                console.log('Complete');
                return this.setState({ timesMeasure })
            }
            console.log('Sin measures');
            return this.setState({ timesMeasure })
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

    componentDidMount = async () => {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
        const { id } = this.props.match.params
        const { data: { group } } = await axios.get(`http://localhost:3000/api/groups/${id}`)
        this.setState({
            group
        })
        this.getMeasurementsTimes()
    }

    componentDidUpdate() {
        this.deleteStudent()
    }

    render() {

        const { group } = this.state;
        const students = this.state.group.students
        const timesMeasure = this.state.timesMeasure
        console.log('render status', timesMeasure);

        return (
            <Layout>
                <section className="section">
                    <div className="container">

                        <div className="columns is-centered">
                            <div className="column box laraContent is-12">

                                {group &&
                                    <p className="title is-2"><span className="subtitle is-3">grupo:</span> {group.level}{group.group}</p>
                                }
                                <hr />
                                <div className="columns">
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
                                    <table className="table is-striped is-fullwidth">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Nombre</th>
                                                <th>Edad</th>
                                                <th>Género</th>
                                                <th>Status</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {students && students.map((student, i) =>
                                                <tr key={i}>
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
                    </div>
                </section>
            </Layout>
        );
    }
}

GroupDetail.contextType = MyContext;

