import './Header.css'
import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'


export default props => 
        <header id="header-responsive" className="header d-none d-sm-flex flex-column">
            <span>
              <nav className="menu_header">
                  <Link to="/NavResponsive">
                    <i className="fas fa-bars"></i> <p>&#9776;</p>
                  </Link>
              </nav>
              <h1 className="mt-2 nom">
                Felipe Oliveira
              </h1>
            </span>
            
        </header>