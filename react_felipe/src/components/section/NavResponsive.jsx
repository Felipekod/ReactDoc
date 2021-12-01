import React from 'react'
import Main from '../template/Main'
import {Link} from 'react-router-dom'


export default props => 
    <Main title="Navbar responsive" subtittle="Portifolio">
        <nav>
            <Link to="/">
                <i className="fa fa-home"></i> Début
            </Link>
            <Link to="/Timer_State">
                <i className="fa fa-home"></i> Premiers exercices
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
    </Main>