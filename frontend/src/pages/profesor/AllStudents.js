import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class AllStudents extends Component {

    state = {
        students: undefined
    }

    getStudent = async () => {
        const response = await axios.get('http://localhost:3000/api/viewstudents')
        this.setState({
            students: response.data.students
        })
    }

    componentDidMount() {
        this.getStudent()
    }

    render() {
        const { students } = this.state;
        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
                </div>
                <div className="column is-12">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Estatura</th>
                                <th>Peso</th>
                                <th>Potencia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students && students.map((student, i) =>
                                <tr key={i}>
                                    <td>{student.name} {student.lastname1} {student.name2}</td>
                                    <td>{student.age}</td>
                                    <td>{student.weight}</td>
                                    <td>{student.height}</td>
                                    <td></td>
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