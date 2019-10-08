import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { MyContext } from '../../context';
import axios from 'axios';
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
      const response = await axios.post('http://localhost:3000/api/measures', body1)
      this.setState({
        response: response.data.msg
      })
      console.log(response)
    }
    catch (e) {
      console.log(e, e.response);
    }
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
    if (!this.context.state.studentId) return this.props.history.goBack() // maybe nunca se ocupa, revisar documentación
    this.setState({
      studentId: this.context.state.studentId
    })
  }

  render() {
    console.log(this.state)
    const { measurement } = this.state

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column box is-12">
                <div className="columns is-centered laraContent">
                  <div className="column is-8">
                    <form className="box" onSubmit={this.addMeasurement}>

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
                        <label className="label">Potencia: {measurement.power}</label>
                        <label className="label">IMC: {measurement.imc}</label>
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
                        <label className="label">Abdome:</label>
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
                        <label className="label">ICA: {measurement.ica}</label>
                      </div>
                      <div className="field">
                        <p className="button is-fullwidth" onClick={() => this.calculateValues()}>Calcular resultados</p>
                      </div>

                      <div className="field">
                        <button className="button is-fullwidth is-primary" type='submit'>Agregar Alumno</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

AddMeasure.contextType = MyContext;