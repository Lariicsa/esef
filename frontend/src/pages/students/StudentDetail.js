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
        const { data: { student } } = await axios.get(`http://localhost:3000/api/students/${id}`)
        this.setState({
            student
        })

    }

    render() {
        const { student } = this.state;
        console.log(student);

        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="columns is-centered">

                            <div className="column is-12">
                                <div className="columns is-centered laraContent is-mobile">
                                    {student &&

                                        <div className="column box laraPadd is-10">
                                            <div className="columns is-right">
                                                <div className="column is-12">
                                                    <h1 className="title is-1 has-text-right">{student.name} {student.lastname1} {student.lastname2}</h1>
                                                    <h2 className="subtitle is-3 has-text-right">{student.group.level}{student.group.group}</h2>
                                                    <p className="is-size-4 has-text-right">Edad: <strong>{student.age} años, Sexo: <strong>{student.gender}</strong></strong> </p>
                                                </div>
                                            </div>
                                            <div className="columns is-center">
                                                <div className="column">
                                                    {student.measurements && student.measurements.map((ms, i) =>
                                                        <ul key={i}>
                                                            <li className="is-size-5">Peso: <strong>{ms.weight}kg</strong></li>
                                                            <li className="is-size-5">Altura: <strong>{ms.height}m</strong></li>
                                                            <li className="is-size-5">Cadera: <strong>{ms.hip}cm</strong></li>
                                                            <li className="is-size-5">Velocidad: <strong>{ms.velocity} m/s</strong></li>
                                                            <li className="is-size-5">Flexibilidad: <strong>{ms.flexibility}</strong></li>
                                                            <li className="is-size-5">M. Inferiores: <strong>{ms.lowerMass}</strong></li>
                                                            <li className="is-size-5">Abdomen: <strong>{ms.abdominalFlat} cm</strong></li>
                                                            <li className="is-size-5">M superiores: <strong>{ms.upperMass}</strong></li>
                                                            <li className="is-size-5">Frecuencia cardiaca en reposo: <strong>{ms.restingHeartRate} lpm</strong></li>
                                                            <li className="is-size-5">Frecuencia cardiaca de esfuerzo<strong>{ms.stressHeartRate} lpm</strong></li>
                                                            <li className="is-size-5">Frecuencia cardiaca en recuperación: <strong>{ms.heartRateRecovery} lpm</strong></li>
                                                            <li className="is-size-5">Metros corridos: <strong>{ms.meters} m</strong></li>
                                                            <li className="is-size-5">Índice de capacidad aeróbica: <strong>{ Math.round(ms.ica)}</strong></li>
                                                        </ul>
                                                    )}
                                                </div>

                                                <div className="column laraBoy"></div>
                                            </div>

                                            <div className="columns is-center is-mobile">
                                            <h2 className="subtitle is-3 has-text-center">Datos gráficos</h2>
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
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

StudentDetail.contextType = MyContext;

