import './Main.css'
import React from 'react'

export default props => 
    <React.Fragment>
        <main id="content-responsive" className="content container-fluid">
            <div id="div-responsive" className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>