import React from 'react'
import Main from '../template/Main'
import felipeImg from '../../assets/pictures/felipeTech.jpeg'
import './Home.css'

export default props => 
    <Main icon="home" title="Hey" subtittle="Portifolio">
        <div className='bienvenue-felipe' style={{ backgroundImage: `url(${felipeImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
            <h1>TECH</h1>
            <p className="mb-0">With love ❤️</p>
        </div>

    </Main>