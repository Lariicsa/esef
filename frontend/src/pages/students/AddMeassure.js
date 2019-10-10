import React, { Component } from 'react';
import { MyContext } from '../../context';
//import axios from 'axios';
import MAIN_SERVICE from '../../services/main';
import Layout from '../../components/Layout';

export default class AddMeasure extends Component {

  state = {
    studentId: undefined,
    measurement: {
      weight: undefined, // peso
      height: undefined, // estatura
      hip: undefined, // cintura
      velocity: undefined, // velocidad
      flexibility: undefined, // flexibilidad
      lowerMass: undefined, // masa inferior
      abdomen: undefined, // abdomen
      upperMass: undefined, // masa superior
      restingHeartRate: undefined, // frecuencia cardiaca en reposo
      stressHeartRate: undefined, // frecuencia cardiaca de esfuerzo
      heartRateRecovery: undefined, // frecuencia cardiaca de recuperacion
      meters: undefined, // metros recorridos
      power: undefined, // potencia -> se calcula
      imc: undefined, // imc -> se calcula
      abdominalFat: undefined, // % de grasa abdominal -> se calcula
      ica: undefined //indice de capacidad aerobica -> se calcula
    },
    user: {},
    response: undefined
  }

  addMeasurement = async e => {
    e.preventDefault()
    const { measurement, studentId } = this.state
    const body1 = { measurement, studentId }
    try {
      const response = await MAIN_SERVICE.addMeasurement(body1)
      this.setState(
        { response: response.data.msg }
      )
    }
    catch (e) {
      console.log(e, e.response);
    }
    return this.props.history.push(`/students/students/${studentId}`)

  }
  calculateValues = () => {
    const { measurement } = this.state
    const { weight, height, hip } = measurement
    const { restingHeartRate, stressHeartRate, heartRateRecovery, meters } = measurement

    let power = height ? height * height : undefined
    let imc = (weight && power) ? weight / power : undefined
    let abdominalFat = (height && hip) ? hip / height : undefined

    let ica = (restingHeartRate && stressHeartRate && heartRateRecovery && meters) ? (restingHeartRate + stressHeartRate + heartRateRecovery) / meters : undefined

    this.setState({
      measurement: {
        ...this.state.measurement,
        'power': power,
        'imc': imc,
        'abdominalFat': abdominalFat,
        'ica': ica
      }
    })
  }

  handleInput = e => {
    this.setState({
      measurement: {
        ...this.state.measurement,
        [e.target.name]: e.target.value
      }
    })
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    this.setState({
      studentId: this.context.state.studentId
    })
  }

  render() {
    const { measurement } = this.state

    return (
      <Layout>
        <div className="columns box is-centered">
          <div className="column is-12">
            <div className="columns is-right">
              <div className="column is-12">
                <h2 className="title is-1 has-text-right">Añadir Medición</h2>
              </div>
            </div>
            <form className="box" onSubmit={this.addMeasurement}>
              <div className="columns is-centered is-vcentered">
                <div className="column is-7">
                  <div className="field">
                    <label className="label">Peso:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.weight}
                      type='number'
                      name='weight'
                    />
                  </div>

                  <div className="field">
                    <label className="label">Estatura:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.height}
                      type='number'
                      name='height'
                    />

                  </div>

                  <div className="field">
                    <label className="label">Cintura:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.hip}
                      type='number'
                      name='hip'
                    />
                    <label className="label">% Grasa abdominal: {measurement.abdominalFat}</label>
                  </div>

                  <div className="field">
                    <label className="label">Velocidad:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.velocity}
                      type='number'
                      name='velocity'
                    />
                  </div>

                  <div className="field">
                    <label className="label">Flexibilidad:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.flexibility}
                      type='number'
                      name='flexibility'
                    />
                  </div>


                  <div className="field">
                    <label className="label">M.Inferior:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.lowerMass}
                      type='number'
                      name='lowerMass'
                    />
                  </div>


                  <div className="field">
                    <label className="label">Abdomen:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.abdomen}
                      type='number'
                      name='abdomen'
                    />
                  </div>


                  <div className="field">
                    <label className="label">M.Superior:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.upperMass}
                      type='number'
                      name='upperMass'
                    />
                  </div>

                  <div className="field">
                    <label className="label">Frecuencia cardiaca en reposo:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.restingHeartRate}
                      type='number'
                      name='restingHeartRate'
                    />
                  </div>

                  <div className="field">
                    <label className="label">Frecuencia cardiaca de esfuerzo:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.stressHeartRate}
                      type='number'
                      name='stressHeartRate'
                    />
                  </div>

                  <div className="field">
                    <label className="label">Freccuencia cardiaca en recuperación:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.heartRateRecovery}
                      type='number'
                      name='heartRateRecovery'
                    />
                  </div>

                  <div className="field">
                    <label className="label">Metros recorridos:</label>
                    <input className="input"
                      required
                      onChange={this.handleInput}
                      value={measurement.meters}
                      type='number'
                      name='meters'
                    />
                  </div>
                  <div className="field">
                    <p className="button is-fullwidth" onClick={() => this.calculateValues()}>Calcular resultados</p>
                  </div>

                </div>
                <div className="column is-5">
                  <div className="columns is-centered">
                    <div className="column is-12">
                      {measurement.imc > 0 &&
                        <>
                          <h3 className="title is-3 has-text-centered has-color-primary">IMC</h3>
                          <div className="title is-3 has-text-centered">{Math.round(measurement.imc)}</div></>
                      }
                    </div>
                  </div>
                  <div className="columns is-centered">
                    <div className="column is-12">
                      {measurement.power > 0 &&
                        <>
                          <h3 className="title is-3 has-text-centered has-color-primary">Potencia:</h3>
                          <div className="title is-3 has-text-centered">{Math.round(measurement.power)}</div>
                        </>
                      }
                    </div>
                  </div>
                  <div className="columns is-centered">
                    <div className="column is-12">
                      {measurement.ica > 0 &&
                        <>
                          <h3 className="title is-3 has-text-centered has-color-primary">Potencia:</h3>
                          <div className="title is-3 has-text-centered">{Math.round(measurement.ica)}</div>
                        </>
                      }
                    </div>
                  </div>
                  { measurement.ica >0 && measurement.power >0 && measurement.imc >0 &&
                  <>
                  <div className="field">
                    <button className="button is-fullwidth is-primary" type='submit'>Agregar Alumno</button>
                  </div>
                  </>
                  }
                </div>
              </div>

            </form>

          </div>
        </div>
      </Layout>
    );
  }
}

AddMeasure.contextType = MyContext;