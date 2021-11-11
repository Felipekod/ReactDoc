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
            <i className="fa fa-home"></i> Exercices 1
        </Link>
        <Link to="/exercice_2">
            <i className="fa fa-home"></i> Exercices 2
        </Link>
        <Link to="/exercice_3">
            <i className="fa fa-home"></i> Exercices 3
        </Link>
        <Link to="/exercice_4">
            <i className="fa fa-home"></i> Exercices 4 - Photos
        </Link>
        <Link to="/exercice_5">
            <i className="fa fa-home"></i> Exercices 5
        </Link>
    </nav>
</aside>