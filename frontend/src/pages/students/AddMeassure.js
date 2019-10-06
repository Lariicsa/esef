import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class AddMeasure extends Component {

  state = {
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
    const { measurement } = this.state
    try {
      const response = await axios.post('http://localhost:3000/api/measures', measurement)
      this.setState({
        response: response.data.msg
      })
      console.log(response)
    }
    catch (e) {
      console.log(e, e.response);
    }
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
    console.log('context', this.context)
  }

  render() {
    const { measurement } = this.state
    console.log(this.state);

    return (
      <div className="columns is-centered">
        <div className="column laraBar laraSide">
          <Sidebar history={this.props.history} />
        </div>
        <div className="column box lara is-10">
          <div className="columns laraContent">
            <div className="column is-offset-1 box is-6">
              <h1 className="title is-1">Agregar mediciones de alumno</h1>
              <form onSubmit={this.addMeasurement}>

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
                </div>

                <div className="field">
                  <button className="button is-fullwidth is-primary" type='submit'>Agregar Alumno</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddMeasure.contextType = MyContext;