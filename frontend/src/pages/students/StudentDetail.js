import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import { VictoryChart, VictoryTheme, VictoryStack, VictoryAxis, VictoryBar } from 'victory'
import Layout from '../../components/Layout';

export default class StudentDetail extends Component {

    state = {
        student: undefined
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
        const { data: { student } } = await axios.get(`https://morning-mountain-24878.herokuapp.com/api/students/${id}`)
        this.setState({
            student
        })

    }

    render() {
        const { student } = this.state;
        console.log(student);

        return (

            <Layout>
                <div className="columns box is-centered">
                    <div className="column is-12">
                        <div className="columns is-right">
                            <div className="column is-12">
                                <h2 className="title is-1 has-text-right">Resultados</h2>
                            </div>
                        </div>

                        {student &&
                            <>
                                <div className="columns">
                                    <div className="column is-12">
                                        <h2 className="title is-3">{student.name} {student.lastname1} {student.lastname2}</h2>
                                        <h4 className="subtitle is-3">{student.group.level}{student.group.group}</h4>
                                        <p className="subtitle is-size-4">Edad: <strong>{student.age} años</strong>, Sexo: <strong>{student.gender}</strong></p>
                                    </div>
                                </div>
                                <div className="columns is-center">
                                    <div className="column is-12">
                                        {student.measurements && student.measurements.map((ms, i) =>
                                            <div key={i} className="box">
                                                <div className="columns is-vcentered">
                                                    <div className="column is-6">
                                                        <p className="subtitle is-4 has-text-color-primary has-text-right">Medición {i + 1}</p>
                                                        <ul>
                                                            <li className="is-size-4">Peso: <h3 className="title has-text-color-primary">{ms.weight}kg</h3></li>
                                                            <li className="is-size-4">Altura: <h3 className="title has-text-color-primary">{ms.height}m</h3></li>
                                                            <li className="is-size-4">Cadera: <h3 className="title has-text-color-primary">{ms.hip}cm</h3></li>
                                                            <li className="is-size-4">Velocidad: <h3 className="title has-text-color-primary">{ms.velocity} m/s</h3></li>
                                                            <li className="is-size-4">Flexibilidad: <h3 className="title has-text-color-primary">{ms.flexibility}</h3></li>
                                                            <li className="is-size-4">M. Inferiores: <h3 className="title has-text-color-primary">{ms.lowerMass}</h3></li>
                                                            <li className="is-size-4">Abdomen: <h3 className="title has-text-color-primary">{ms.abdominalFlat} cm</h3></li>
                                                            <li className="is-size-4">M superiores: <h3 className="title has-text-color-primary">{ms.upperMass}</h3></li>
                                                            <li className="is-size-4">Frecuencia cardiaca en reposo: <h3 className="title has-text-color-primary">{ms.restingHeartRate} lpm</h3></li>
                                                            <li className="is-size-4">Frecuencia cardiaca de esfuerzo<h3 className="title has-text-color-primary">{ms.stressHeartRate} lpm</h3></li>
                                                            <li className="is-size-4">Frecuencia cardiaca en recuperación: <h3 className="title has-text-color-primary">{ms.heartRateRecovery} lpm</h3></li>
                                                            <li className="is-size-4">Metros corridos: <h3 className="title has-text-color-primary">{ms.meters} m</h3></li>
                                                            <li className="is-size-4">Índice de capacidad aeróbica: <h3 className="title has-text-color-primary">{Math.round(ms.ica)}</h3></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column laraBoy"></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="column is-8">
                                    <VictoryChart
                                        domainPadding={10}
                                        theme={VictoryTheme.material}
                                    >
                                        <VictoryAxis
                                            tickValues={["Ciclo 2019-1", "Ciclo 2019-2"]}
                                        />
                                        <VictoryAxis
                                            dependentAxis
                                        />
                                        <VictoryStack
                                            colorScale={"warm"}
                                        >

                                            {student.measurements && student.measurements.map((ms, i) => (

                                                <VictoryBar key={i}
                                                    data={[{ x: i + 1, y: ms.ica }]}
                                                />

                                            ))}

                                        </VictoryStack>
                                    </VictoryChart>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </Layout>
        );
    }
}

StudentDetail.contextType = MyContext;

