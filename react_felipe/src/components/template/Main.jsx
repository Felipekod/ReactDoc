import './Main.css'
import React from 'react'
import Header from './Header'

export default props => 
    <React.Fragment>
        <Header />
        <main id="content-responsive" className="content container-fluid">
            <div id="div-responsive" className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>