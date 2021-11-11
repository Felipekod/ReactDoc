import React from 'react'
import Main from '../template/Main'

const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map(number => <li>{number}</li>)

export default props => 
    <Main icon="home" title="Exercices 3" subtittle="Portifolio">
        <div className='display-4'>Exercices 3!</div>
        <hr/>
        <h2>Lists and Keys</h2>
        <ul>{listItems}</ul>
        
        
    </Main>