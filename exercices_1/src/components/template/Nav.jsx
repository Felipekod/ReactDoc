import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props => 
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Début
        </Link>
        <Link to="/exercice_1">
            <i className="fa fa-home"></i> Premiers exercices
        </Link>
        <Link to="/exercice_2">
            <i className="fa fa-home"></i> Login button
        </Link>
        <Link to="/exercice_3">
            <i className="fa fa-home"></i> Listes et clés
        </Link>
        <Link to="/exercice_4">
            <i className="fa fa-home"></i> Photos avec backend
        </Link>
        <Link to="/exercice_5">
            <i className="fa fa-home"></i> photo-gallery framework
        </Link>
        <Link to="/exercice_6">
            <i className="fa fa-home"></i> Forms
        </Link>
        <Link to="/exercice_7">
            <i className="fa fa-home"></i> Faire remonter l'état
        </Link>
        <Link to="/exercice_8">
            <i className="fa fa-home"></i> Spring Boot BackEnd
        </Link>
    </nav>
</aside>