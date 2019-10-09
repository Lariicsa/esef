import { NavLink } from 'react-router-dom'
import React, { Component } from 'react';
import { MyContext } from '../context/index';

export default class Navbar extends Component {

    render() {
        //console.log(this.props.history.location.pathname)
        return (
            <>
                <div className="laraTop">
                    <NavLink activeClassName="is-active" className="navbar-item" to={'/dashboard'}>MonitorEF</NavLink>
                    <div className="navbar-item laraTop-user">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <span className="navbar-link">
                                <div className="laraTop-avatar fa fa-user-circle"></div>
                                {this.props.profesorName}
                                <i>Profesor</i>
                            </span>

                            <div className="navbar-dropdown">
                                <div className="navbar-item">
                                    <NavLink to={'/groups/all'} className="navbar-item">Perfil</NavLink>
                                </div>
                                <hr className="navbar-divider"></hr>
                                <form className="navbar-item">
                                    <input className="button is-text" onClick={this.context.logOut} type="submit" value="Cerrar sesión" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <p role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </p>
                    </div>

                    <div id="laraBurger" className="navbar-menu">
                        <div className="navbar-end">
                        <NavLink className="navbar-item" activeClassName="is-active" to={'/dashboard'}>Resumen</NavLink>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <span className="navbar-link">
                                    Grupos
                                </span>
                                <div className="navbar-dropdown is-right">
                                    <NavLink to={'/groups/all'} className="navbar-item" activeClassName="is-active">Ver Grupos</NavLink>
                                    <hr className="navbar-divider" />
                                    <NavLink to={'/groups/addgroup'} className="navbar-item" activeClassName="is-active">Agregar Grupo</NavLink>
                                </div>
                            </div>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <span className="navbar-link">
                                    Alumnos
                                </span>
                                <div className="navbar-dropdown is-right">
                                    <NavLink to={'/students/all'} className="navbar-item" activeClassName="is-active">Ver Alumnos</NavLink>
                                    <hr className="navbar-divider" />
                                    <NavLink to={'/students/addstudent'} className="navbar-item" activeClassName="is-active">Agregar Alumno</NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

Navbar.contextType = MyContext;