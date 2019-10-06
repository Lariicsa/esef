import { NavLink } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../context/index';

export default class Sidebar extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        const userData = this.context.state.loggedUser
        this.setState(userData)
    }

    render() {
        //console.log(this.props.history.location.pathname)
        return (
            <aside className="menu">
                <p className="menu-label">Inicio</p>
                <ul className="menu-list">
                    <li><NavLink to={'/dashboard'} activeClassName="is-active">Resumen</NavLink></li>
                </ul>

                <p className="menu-label">Test</p>
                <ul className="menu-list">
                    <li><NavLink to={'/schools/addschool'} activeClassName="is-active">Add School</NavLink></li>
                    
                </ul>

                <p className="menu-label">Grupos</p>
                <ul className="menu-list">
                    <li><NavLink to={'/groups/all'} activeClassName="is-active">Todos</NavLink></li>
                    <li><NavLink to={'/groups/addgroup'} activeClassName="is-active">Añadir grupo</NavLink></li>
                </ul>

                <p className="menu-label">Estudiantes</p>
                <ul className="menu-list">
                    <li><NavLink to={'/students/all'} activeClassName="is-active">Alumnos</NavLink></li>
                    <li><NavLink to={'/students/addstudent'} activeClassName="is-active">Agregar Alumno</NavLink></li>
                </ul>
                

                <ul className="menu-list">
                    <li>
                    <form>
                        <input onClick={this.context.logOut} type="submit" value="Cerrar sesión" />
                    </form>
                    </li>
                </ul>
            </aside>
        );
    }
}

Sidebar.contextType = MyContext;