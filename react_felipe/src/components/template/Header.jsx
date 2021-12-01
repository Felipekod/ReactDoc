import './Header.css'
import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'


export default props => 
        <header className="header d-none d-sm-flex flex-column">
            <h1 className="mt-2">
                Felipe Oliveira
            </h1>
            <nav className="menu_header">
                <Link to="/NavResponsive">
                  <i className="fa fa-home"></i> Menu
                </Link>
            </nav>
        </header>