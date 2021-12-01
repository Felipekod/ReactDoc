import React from 'react'
import Main from '../template/Main'

//List and keys exercices
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map(number => <li>{number}</li>)
const todoItens = numbers.map((number, index) => <li key={index}>{"Numéro: " + number + ' Index: '+ index}</li>)

function ListItem(props){
    return <li>{props.value}</li>
}

function NumberList(props){
    const numbers2 = props.numbers
    const listItems2 = numbers2.map((number) => <ListItem key={number.toString()} value={number}/>)
    return (
        <ul>
            {listItems2}
        </ul>
    )
}

export default props => 
    <Main icon="home" title="Exercices 3" subtittle="Portifolio">
        <div className='display-4'>Liste et clés!</div>
        <hr/>
        <h2>Lists and Keys</h2>
        <ul>{listItems}</ul>
        <hr/>
        <ul>{todoItens}</ul>
        <hr/>
        <h3></h3>
        <NumberList numbers= {numbers}/>
        
    </Main>