import { Link } from 'react-router-dom'
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

        return (
            <aside className="menu">
                <p className="menu-label">Inicio</p>
                <ul className="menu-list">
                    <li><Link to={'/'} className="is-active" >Resumen</Link></li>
                </ul>
                <p className="menu-label">Grupos</p>
                <ul className="menu-list">
                    <li><Link to={'/groups/all'} >Todos</Link></li>
                    <li><Link to={'/groups/addgroup'} >Añadir grupo</Link></li>
                </ul>

                <p className="menu-label">Estudiantes</p>
                <ul className="menu-list">
                    <li><Link to={'/profesor/all'} >Alumnos</Link></li>
                    <li><Link to={'/profesor/addstudent'} >Agregar Alumno</Link></li>
                </ul>

                <ul className="menu-list">
                    <form>
                        <input onClick={this.context.logOut} type="submit" value="Cerrar sesión" />
                    </form>
                </ul>
            </aside>
        );
    }
}

Sidebar.contextType = MyContext;