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
                <div className="column laraBar laraSide">
                    <Sidebar history={this.props.history} />
                </div>
                {student &&

                    <div className="column is-10">
                        <div className="columns is-centered laraContent">
                            <div className="column box is-10">
                                <h1 className="title is-1">{student.name} {student.lastname1} {student.group.level}</h1>
                                <strong>{student.measurements.weight}</strong>
                                <p className="is-size-5 has-text-primary">Edad: {student.age}</p>
                                <p className="is-size-5 has-text-primary">Sexo: {student.gender}</p>
                                
                                {student.measurements && student.measurements.map((ms, i) =>
                                <ul key={i}>
                                <li  className="is-size-5 has-text-primary">Peso: {ms.weight}</li>
                                <li className="is-size-5 has-text-primary">Altura: {ms.height}</li>
                                <li className="is-size-5 has-text-primary">Cadera: {ms.hip}</li>
                                <li className="is-size-5 has-text-primary">Velocidad: {ms.vel}</li>
                                <li className="is-size-5 has-text-primary">Flexibilidad: {ms.flex}</li>
                                <li className="is-size-5 has-text-primary">M. Inferiores: {ms.minf}</li>
                                <li className="is-size-5 has-text-primary">Abdomen: {ms.abd}</li>
                                <li className="is-size-5 has-text-primary">M superiores: {ms.msup}</li>
                                <li className="is-size-5 has-text-primary">Frecuencia cardiaca en reposo{ms.fcrep}</li>
                                <li className="is-size-5 has-text-primary">Frecuencia cardiaca de esfuerzo{ms.fce}</li>
                                <li className="is-size-5 has-text-primary">Frecuencia cardiaca en recuperación: {ms.fcrec}</li>
                                <li className="is-size-5 has-text-primary">Metros corridos: {ms.meters}</li>
                                <li className="is-size-5 has-text-primary">Índice de capacidad aeróbica: {ms.ica}</li>
                                </ul>
                                    )}
                            </div>

                        </div>
                    </div>

                }
            </div>
        );
    }
}

StudentDetail.contextType = MyContext;

