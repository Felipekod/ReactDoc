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
    </nav>
</aside>