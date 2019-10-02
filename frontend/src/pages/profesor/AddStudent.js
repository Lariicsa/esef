import React, { Component } from 'react';
import { MyContext } from '../../context';
import AUTH_SERVICE from '../../services/auth';
import Sidebar from '../../components/Sidebar';

export default class AddStudent extends Component {

  state = {
    student: {
      level: '',
      group: '',
      name: 'Timón',
      lastname1: 'Avil',
      lastname2: 'Gonzalez',
      age: 2,
      gender: 'masculino',
      weight: 24,
      height: 1.1,
      hip: 100,
      vel: 100,
      flex: 10,
      minf: 10,
      abd: 20,
      msup: 20,
      fcrep: 20,
      fce: 30,
      fcrec: 10,
      meters: 110,
    },
    response: undefined
  }

  addStudent = (e) => {
    e.preventDefault();
    AUTH_SERVICE.addstudent(this.state.student)
      .then((response) => {
        let studentMsg = response.data.msg
        console.log(studentMsg);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleInput = e => {
    this.setState({
      student: {
        ...this.state.student,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const { student } = this.state
    return (
      <div className="columns is-centered">
        <div className="column">
          <Sidebar />
        </div>
        <div className="column box is-12">
          <h1 className="title is-1">Agregar alumno</h1>
          <div className="columns">
            <div className="column is-6">
              <form onSubmit={this.addStudent}>

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
                  <label className="label">Appellido paterno:</label>
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.lastname1}
                    type='text'
                    name='lastname1'
                  />
                </div>

                <div className="field">
                  <label className="label">Appellido materno:</label>
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
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.gender}
                    type='text'
                    name='gender'
                  />
                </div>
                <div className="field">
                  <label className="label">Peso:</label>
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.weight}
                    type='number'
                    name='weight'
                  />
                </div>

                <div className="field">
                  <label className="label">Estatura:</label>
                  <input className="input"
                    required
                    onChange={this.handleInput}
                    value={student.height}
                    type='number'
                    name='height'
                  />
                </div>

                <div className="field">
                  <button className="button is-fullwidth is-primary" type='submit'>Add student</button>
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