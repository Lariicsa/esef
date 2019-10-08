import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

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

    componentDidMount = async () => {
        if (!this.context.state.loggedUser) return this.props.history.push('/login')
        const { id } = this.props.match.params
        const { data: { group } } = await axios.get(`http://localhost:3000/api/groups/${id}`)
        this.setState({
            group
        })
        this.getMeasurementsTimes()
    }

    render() {
        
        const { group } = this.state;
        const students = this.state.group.students
        const timesMeasure = this.state.timesMeasure
        console.log('render status', timesMeasure);

        return (
            <>
      <Sidebar history={this.props.history} />
      <section className="section">
        <div className="container">
          
          <div className="columns is-centered">
          <div className="column box is-12">
                    <div className="columns is-centered laraContent">
                        <div className="column is-12">
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
                                <table className="table is-striped is-fullwidth">
                                    <thead>
                                        <tr>
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
                                                <td>{student.name} {student.lastname1} {student.name2}</td>
                                                <td>{student.age}</td>
                                                <td>{student.gender}</td>

                                                {timesMeasure  === 0 &&
                                                <td><span className="tag is-warning">1ra medición</span></td>
                                                }
                                            
                                                
                                                <td><Link to={`/students/students/edit/${student._id}`}>edit</Link></td>
                                                <td>
                                                    <Link to={'/students/addmeasurement'} onClick={() => this.getStudentId(student._id)}>Agregar mediciones
                                                    </Link></td>
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

GroupDetail.contextType = MyContext;

