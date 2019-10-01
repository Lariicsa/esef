import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';

export default class StudentDetail extends Component {

    state = {
        student: undefined
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params
    
        const {data: {student}} = await axios.get(`http://localhost:3000/api/students/${id}`)
        this.setState({
            student
        })
        
      }

    render() {
        const { student } = this.state;
        
        return (
            <div>
               {student && <p>{student.name}</p>}
            </div>
        );
    }
}

StudentDetail.contextType = MyContext;