import React from 'react'
import { ReactDOM } from 'react'
import Main from '../template/Main'

function formatName(user){
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'Felipe',
    lastName: 'Oliveira'
}

function Welcome(props){
    return <h3>Hello, {props.name}</h3>
}

//Classe qui renderise un component horloge.
class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    //Methodes Mount et Unmount pour le cicle de view du component
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return <h3>It's {this.state.date.toLocaleTimeString()}.</h3>
    }
}


export default props => 
    <Main icon="home" title="Exercices 1" subtittle="Portifolio">
        <div className='display-4'>Exercices 1!</div>
        <hr/>
        <p className="mb-0">Format name: {formatName(user)}</p>
        <hr/>
        <Welcome name="Rick"/>
        <Welcome name="Morty"/>
        <hr/>
        <h2>React.component class avec state</h2>
        <Clock />
        

    </Main>


