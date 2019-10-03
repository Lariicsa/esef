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

        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
                </div>
                {student &&
                    <div className="section">
                        <div className="column box is-10">
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title is-1">{student.name} {student.lastname1} {student.lastname2}</h1>
                                </div>
                                <div className="column">
                                    <p className="title is-1">{student.level}</p>
                                    <p className="title is-1">{student.group}</p>
                                </div>
                            </div>
                            <div className="columns profile is-centered">
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Edad: {student.age}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Sexo: {student.gender}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Peso: {student.weight}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Altura: {student.height}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Cadera: {student.hip}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Velocidad: {student.vel}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Flexibilidad: {student.flex}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">M. Inferiores: {student.minf}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Abdomen: {student.abd}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">M superiores: {student.msup}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Frecuencia cardiaca en reposo{student.fcrep}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Frecuencia cardiaca de esfuerzo{student.fce}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Frecuencia cardiaca en recuperación: {student.fcrec}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Metros corridos: {student.meters}</p></div>
                                <div className="column is-3"><p className="is-size-5 has-text-primary">Índice de capacidad aeróbica: {student.ica}</p></div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

StudentDetail.contextType = MyContext;

