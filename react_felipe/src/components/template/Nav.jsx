import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props => 
<aside id="menu-area-id"className="menu-area">
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Début
        </Link>
        <Link to="/Timer_State">
            <i className="fa fa-home"></i> Timer State
        </Link>
        <Link to="/Login_Control">
            <i className="fa fa-home"></i> Login button
        </Link>
        <Link to="/List_Keys">
            <i className="fa fa-home"></i> Listes et clés
        </Link>
        <Link to="/Photos_Node">
            <i className="fa fa-home"></i> Photos avec backend
        </Link>
        <Link to="/React_Photo_Gallery">
            <i className="fa fa-home"></i> photo-gallery framework
        </Link>
        <Link to="/Forms">
            <i className="fa fa-home"></i> Forms
        </Link>
        <Link to="/Liffiting_State">
            <i className="fa fa-home"></i> Faire remonter l'état
        </Link>
        <Link to="/CRUD_Spring_Boot">
            <i className="fa fa-home"></i> Spring Boot BackEnd
        </Link>
    </nav>
</aside>