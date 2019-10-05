import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class AddStudent extends Component {

  state = {
    student: {
      level: '',
      group: '',
      name: '',
      lastname1: '',
      lastname2: '',
      age: 0,
      gender: '',
      weight: 0,
      height: 0,
      hip: 0,
      vel: 0,
      flex: 0,
      minf: 0,
      abd: 0,
      msup: 0,
      fcrep: 0,
      fce: 0,
      fcrec: 0,
      meters: 0,
    },
    response: undefined
  }

  addStudent = async e => {
    e.preventDefault()
    const { student } = this.state
    try {
      const response = await axios.post('http://localhost:3000/api/students', student)
      this.setState({
        // student: {
        //   level: '',
        //   group: '',
        //   name: '',
        //   lastname1: '',
        //   lastname2: '',
        //   age: 0,
        //   gender: '',
        //   weight: 0,
        //   height: 0,
        //   hip: 0,
        //   vel: 0,
        //   flex: 0,
        //   minf: 0,
        //   abd: 0,
        //   msup: 0,
        //   fcrep: 0,
        //   fce: 0,
        //   fcrec: 0,
        //   meters: 0
        // },
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
      student: {
        ...this.state.student,
        [e.target.name]: e.target.value
      }
    })
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
  }

  render() {
    const { student } = this.state
    return (
      <div className="columns is-centered">
        <div className="column">
          <Sidebar history={this.props.history} />
        </div>
        <div className="column box is-10">
          <h1 className="title is-1">Agregar alumno</h1>
          <div className="columns">
            <div className="column is-6">
              <form onSubmit={this.addStudent}>

                <div className="field">
                  <label className="label">Grado</label>
                  <div className="select">
                    <select name="level" value={student.level} onChange={this.handleInput} >
                      <option disabled ></option>
                      <option value="1ro">1ro</option>
                      <option value="2do">2do</option>
                      <option value="3ro">3ro</option>
                      <option value="4to">4to</option>
                      <option value="5to">5to</option>
                      <option value="6to">6to</option>
                    </select>
                  </div>

                  <div className="select">
                    <select name="group" value={student.group} onChange={this.handleInput} >
                      <option disabled ></option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Nombre(s):</label>
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.name}
                    type='text'
                    name='name'
                  />
                </div>
                <div className="field">
                  <label className="label">Apellido paterno:</label>
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.lastname1}
                    type='text'
                    name='lastname1'
                  />
                </div>

                <div className="field">
                  <label className="label">Apellido materno:</label>
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.lastname2}
                    type='text'
                    name='lastname2'
                  />
                </div>

                <div className="field">
                  <label className="label">Edad:</label>
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.age}
                    type='number'
                    name='age'
                  />
                </div>

                <div className="field">
                  <label className="label">Género:</label>
                  <div className="select">
                    <select name="gender" value={student.gender} onChange={this.handleInput} >
                      <option disabled ></option>
                      <option value="Femenino">Femenino</option>
                      <option value="Masculino">Masculino</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Peso:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.weight}
                    type='number'
                    name='weight'
                  />
                </div>

                <div className="field">
                  <label className="label">Estatura:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.height}
                    type='number'
                    name='height'
                  />
                </div>

                <div className="field">
                  <label className="label">Cintura:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.hip}
                    type='number'
                    name='hip'
                  />
                </div>

                <div className="field">
                  <label className="label">Velocidad:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.vel}
                    type='number'
                    name='vel'
                  />
                </div>

                <div className="field">
                  <label className="label">M. Inferiores:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.minf}
                    type='number'
                    name='minf'
                  />
                </div>

                <div className="field">
                  <label className="label">Abdomen:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.abd}
                    type='number'
                    name='abd'
                  />
                </div>

                <div className="field">
                  <label className="label">M. superiores:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.msup}
                    type='number'
                    name='msup'
                  />
                </div>

                <div className="field">
                  <label className="label">FCREP:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.fcrep}
                    type='number'
                    name='fcrep'
                  />
                </div>

                <div className="field">
                  <label className="label">FCE:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.fce}
                    type='number'
                    name='fce'
                  />
                </div>

                <div className="field">
                  <label className="label">FCREC:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.fcrec}
                    type='number'
                    name='fcrec'
                  />
                </div>


                <div className="field">
                  <label className="label">Metros:</label>
                  <input className="input"
                    onChange={this.handleInput}
                    value={student.meters}
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

AddStudent.contextType = MyContext;