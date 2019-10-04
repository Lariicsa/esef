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
        const { id } = this.props.match.params
        console.log('dimount0',this.props.match.params);
        
        const { data: { group } } = await axios.get(`http://localhost:3000/api/groups/${id}`)
        this.setState({
            group
        })
    }

    render() {
        const { group } = this.state;
        const students = this.state.group.students
        console.log('dimount0',this.state.group.students);

        console.log('jei', this.state.group.students);

        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
                </div>
                <div className="column box is-10">
                    {group &&

                        <p className="title is-1">{group.level}{group.group}</p>

                    }
                    <hr />

                    <div className="columns is-centered">
                        <div className="column is-12">
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
                                            <td><Link to={`/profesor/students/edit/${student._id}`}>edit</Link></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

GroupDetail.contextType = MyContext;

