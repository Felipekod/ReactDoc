import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props => 
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Début
        </Link>
        <Link to="/exercices_1">
            <i className="fa fa-home"></i> Exercices 1
        </Link>
    </nav>
</aside>