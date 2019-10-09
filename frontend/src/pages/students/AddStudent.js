import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import MAIN_SERVICE from '../../services/main';
import Layout from '../../components/Layout';

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
    },
    user: {},
    response: undefined
  }

  // addStudent = async e => {
  //   e.preventDefault()
  //   const { student } = this.state
  //   try {
  //     const response = await axios.post('http://localhost:3000/api/students', student)
  //     this.setState({
  //       response: response.data.msg
  //     })
  //     console.log(response)
  //   }
  //   catch (e) {
  //     console.log(e, e.response);
  //   }
  // }

  getStudentId = (studentId) => {
    this.context.setStudentId(studentId);
  }


  addStudent = async e => {
    e.preventDefault()
    const { student } = this.state
    try {
      const response = await MAIN_SERVICE.addStudent(student)
      this.setState(
        { response: response.data.msg }
      )
      console.log(response.data.msg)
    } catch (e) {
      console.log(e, e.response);
    }
  }

  // getGroup = async () => {
  //   const userData = this.context.state.loggedUser
  //   const id = userData._id
  //   const response = await MAIN_SERVICE.getGroup(id)
  //   this.setState(
  //     { user: response.data.user }
  //   )
  // }

  getGroup = async () => {
    const userData = this.context.state.loggedUser
    const id = userData._id
    const response = await axios.get(`http://localhost:3000/api/user/${id}`)
    this.setState(
      { user: response.data.user }
    )
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
    this.getGroup()
  }

  render() {
    const { student } = this.state
    const currentGroups = this.state.user.groups
    console.log('grouf', currentGroups);

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column box laraContent is-12">
                <div className="columns is-centered">
                  <div className="column is-8">
                    <form className="box" onSubmit={this.addStudent}>
                      <div className="field">
                        <label className="label">Grado</label>
                        <div className="select">
                          <select name="level" value={student.level} onChange={this.handleInput} >
                            <option disabled ></option>
                            {currentGroups && currentGroups.map((group, i) =>
                              <option key={i} value={group.level}>{group.level}</option>
                            )}
                          </select>
                        </div>
                        <div className="select">
                          <select name="group" value={student.group} onChange={this.handleInput} >
                            <option disabled ></option>
                            {currentGroups && currentGroups.map((group, i) =>
                              <option key={i} value={group.group}>{group.group}</option>
                            )}
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

AddStudent.contextType = MyContext;