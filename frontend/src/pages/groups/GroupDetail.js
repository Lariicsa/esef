import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class GroupDetail extends Component {

    state = {
        group: {}
    }

    componentDidMount = async () => {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
        const { id } = this.props.match.params
        console.log('dimount0', this.props.match.params);

        const { data: { group } } = await axios.get(`http://localhost:3000/api/groups/${id}`)
        this.setState({
            group
        })
    }

    render() {
        const { group } = this.state;
        const students = this.state.group.students
        console.log('group', this.state.group);

        console.log('students in group', this.state.group.students);

        return (
            <div className="columns is-centered">
                <div className="column laraBar laraSide">
                    <Sidebar history={this.props.history} />
                </div>
                <div className="column box is-10">
                    <div className="columns is-centered laraContent">
                        <div className="column is-10">
                            {group &&
                                <p className="title is-3">{group.level}{group.group}</p>
                            }
                            <hr />
                            <div className="columns">
                                <div className="column is-12">
                                    <div className="buttons is-right">
                                    <Link className="button is-rounded is-primary" to={'/students/addstudent'}>Añadir Alumnos</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-wrapper">
                                <table className="table is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Edad</th>
                                            <th>Estatura</th>
                                            <th>Peso</th>
                                            <th>Género</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students && students.map((student, i) =>
                                            <tr key={i}>
                                                <td>{student.name} {student.lastname1} {student.name2}</td>
                                                <td>{student.age}</td>
                                                <td>{student.height}</td>
                                                <td>{student.weight}</td>
                                                <td>{student.gender}</td>
                                                <td><Link to={`/students/students/edit/${student._id}`}>edit</Link></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

GroupDetail.contextType = MyContext;

