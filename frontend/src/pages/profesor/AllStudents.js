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
        axios.delete(`http://localhost:3000/api/students/${id}`)
        .then(({data}) => {
            this.setState(prevState => {
                return {
                    ...prevState,
                }
            })
        })
        .catch(err => console.log(err))
      }

    componentDidMount() {
        this.getStudents()
    }

    componentDidUpdate() {
        this.deleteStudent()
    }

    render() {
        const { students } = this.state;
        console.log(this.state);
        
        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
                </div>
                <div className="column is-10">
                    <table className="table is-fullwidth table-wrapper">
                        <thead>
                            <tr>
                                <th>Grado</th>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Estatura</th>
                                <th>Peso</th>
                                <th>Género</th>
                                <th>Cintura</th>
                                <th>Potencia</th>
                                <th>IMC</th>
                                <th>% Grasa Abdominal</th>
                                <th>Velocidad</th>
                                <th>Flexibilidad</th>
                                <th>M.Inferiores</th>
                                <th>Abdomen</th>
                                <th>M.Superiores</th>
                                <th>FCREP</th>
                                <th>FCE</th>
                                <th>FCREC</th>
                                <th>Metros</th>
                                <th>ICA</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {students && students.map((student, i) =>
                                <tr key={i}>
                                    <td>{student.level}</td>
                                    <td>{student.name} {student.lastname1} {student.name2}</td>
                                    <td>{student.age}</td>
                                    <td>{student.height}</td>
                                    <td>{student.weight}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.hip}</td>
                                    <td>{student.pot}</td>
                                    <td>{student.imc}</td>
                                    <td>{student.gabd}</td>
                                    <td>{student.vel}</td>
                                    <td>{student.minf}</td>
                                    <td>{student.abd}</td>
                                    <td>{student.msup}</td>
                                    <td>{student.fcrep}</td>
                                    <td>{student.fce}</td>
                                    <td>{student.fcrec}</td>
                                    <td>{student.meters}</td>
                                    <td>{student.ica}</td>
                                    <td>
                                        <Link to={`/profesor/students/${student._id}`}>Ver</Link>
                                        <p className="button is-danger" onClick={() => this.deleteStudent(student._id)}>Borrar</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

AllStudents.contextType = MyContext;