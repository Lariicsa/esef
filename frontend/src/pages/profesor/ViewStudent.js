import React, { Component } from 'react';
import { MyContext } from '../../context';
//import AUTH_SERVICE from '../../services/auth';
import axios from 'axios';

export default class ViewStudent extends Component {

    state = {
        students: undefined
    }

    getStudent = async () => {
        const response = await axios.get('http://localhost:3000/api/viewstudents')        
        this.setState({
            students: response.data.students
        })
    }

    componentDidMount() {
        this.getStudent()
    }

    render() {
        const { students } = this.state;
        
        return (
            <div>
               {students && students.map((student, i) => <p key={i}>{student.name}</p>)} 
            </div>
        );
    }
}

ViewStudent.contextType = MyContext;