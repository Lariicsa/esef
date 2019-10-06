import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class StudentDetail extends Component {

    state = {
        student: undefined
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
        const { data: { student } } = await axios.get(`http://localhost:3000/api/students/${id}`)
        this.setState({
            student
        })
    }

    render() {
        const { student } = this.state;
        console.log(student);


        return (
            <div className="columns is-centered">
                <div className="column laraBar laraSide">
                    <Sidebar history={this.props.history} />
                </div>
                {student &&

                    <div className="column is-10">
                        <div className="columns is-centered laraContent">
                            <div className="column box is-10">
                                <h1 className="title is-1">{student.name} {student.lastname1} {student.lastname2}</h1>
                                <p className="is-size-5 has-text-primary">Edad: {student.age}</p>
                                <p className="is-size-5 has-text-primary">Sexo: {student.gender}</p>
                                <p className="is-size-5 has-text-primary">Peso: {student.weight}</p>
                                <p className="is-size-5 has-text-primary">Altura: {student.height}</p>
                                <p className="is-size-5 has-text-primary">Cadera: {student.hip}</p>
                                <p className="is-size-5 has-text-primary">Velocidad: {student.vel}</p>
                                <p className="is-size-5 has-text-primary">Flexibilidad: {student.flex}</p>
                                <p className="is-size-5 has-text-primary">M. Inferiores: {student.minf}</p>
                                <p className="is-size-5 has-text-primary">Abdomen: {student.abd}</p>
                                <p className="is-size-5 has-text-primary">M superiores: {student.msup}</p>
                                <p className="is-size-5 has-text-primary">Frecuencia cardiaca en reposo{student.fcrep}</p>
                                <p className="is-size-5 has-text-primary">Frecuencia cardiaca de esfuerzo{student.fce}</p>
                                <p className="is-size-5 has-text-primary">Frecuencia cardiaca en recuperación: {student.fcrec}</p>
                                <p className="is-size-5 has-text-primary">Metros corridos: {student.meters}</p>
                                <p className="is-size-5 has-text-primary">Índice de capacidad aeróbica: {student.ica}</p>
                            </div>

                        </div>
                    </div>

                }
            </div>
        );
    }
}

StudentDetail.contextType = MyContext;

