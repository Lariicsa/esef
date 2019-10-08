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
                <ul className="menu-list">
                    <li activeClassName="is-active">
                        <div className="profile">
                        Hola, <strong>{this.props.profesorName}</strong>
                        <span>Profesor</span>
                        </div>
                    </li>
                </ul>
                
                <ul className="menu-list">
                <p className="menu-label">Inicio</p>
                    <li><NavLink to={'/dashboard'} activeClassName="is-active">Resumen</NavLink></li>
                </ul>

                <ul className="menu-list">
                <p className="menu-label">Grupos</p>
                    <li><NavLink to={'/groups/all'} activeClassName="is-active">Todos</NavLink></li>
                    <li><NavLink to={'/groups/addgroup'} activeClassName="is-active">Añadir grupo</NavLink></li>
                </ul>

                <ul className="menu-list">
                <p className="menu-label">Estudiantes</p>
                    <li><NavLink to={'/students/all'} activeClassName="is-active">Todos</NavLink></li>
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