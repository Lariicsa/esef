import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class EditStudent extends Component {

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

    updateStudent = async e => {
        e.preventDefault()
        const { student } = this.state
        try {
            const { id } = this.props.match.params
            const response = await axios.put(`http://localhost:3000/api/students/${id}`, student)
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
            student: {
                ...this.state.student,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        //const { student } = this.state
        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
                </div>
                <div className="column box is-12">
                    <h1 className="title is-1">Editar alumno</h1>
                    <div className="columns">
                        <div className="column is-6">
                            <form onSubmit={this.updateStudent}>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditStudent.contextType = MyContext;