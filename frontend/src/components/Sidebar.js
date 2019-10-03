import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <aside className="menu">
            <p  className="menu-label">Inicio</p>
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

            <li><Link to={'/logout'} >Cerrar sesión</Link></li>
        </aside>
    )
}
