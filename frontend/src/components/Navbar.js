import { NavLink } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../context/index';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <NavLink className="navbar-item" to={'/dashboard'}>
                        <img src="/assets/logoMonitorEf.svg" height="28" alt="fatov" />
                    </NavLink>

                    <NavLink to={'/'} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </NavLink>
                </div>

                <div id="laraBurger" className="navbar-menu">
                    <div className="navbar-start">
                        <NavLink to={'/dashboard'} className="navbar-item" activeClassName="is-active">Resumen</NavLink>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link">Grupos</span>
                            <div className="navbar-dropdown">
                                <NavLink to={'/groups/all'} className="navbar-item" activeClassName="is-active">Todos</NavLink>
                                <NavLink to={'/groups/addgroup'} className="navbar-item" activeClassName="is-active">Agregar Grupo</NavLink>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link">Alumnos</span>
                            <div className="navbar-dropdown">
                                <NavLink to={'/students/all'} className="navbar-item" activeClassName="is-active">Todos</NavLink>
                                <NavLink to={'/students/addstudent'} className="navbar-item" activeClassName="is-active">Agregar Alumno</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link">{this.props.profesorName}</span>
                            <div className="navbar-dropdown is-right">
                                <NavLink to={'/teacher/profile'} className="navbar-item" activeClassName="is-active">Perfil</NavLink>
                                <hr className="navbar-divider" />
                                <form className="navbar-item">
                                    <input className="button is-text" onClick={this.context.logOut} type="submit" value="Cerrar sesión" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.contextType = MyContext;