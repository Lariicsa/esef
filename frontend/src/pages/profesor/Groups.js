import React, { Component } from 'react';
import { MyContext } from '../../context';
import axios from 'axios';
import Sidebar from '../../components/Sidebar';

export default class AllGroups extends Component {

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
        console.log(this.state);
        
        return (
            <div className="columns is-centered">
                <div className="column">
                    <Sidebar />
                </div>
                <div className="column is-12">
                    
                </div>
            </div>
        );
    }
}

AllGroups.contextType = MyContext;