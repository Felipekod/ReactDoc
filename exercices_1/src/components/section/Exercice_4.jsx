import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const baseUrl = 'http://localhost:3001/photos'
const initialState = {
    photo: {id: '', name: ''},
    list: []
}

class Photos extends Component {
    state = {...initialState}

    componentDidMount(){
        axios(baseUrl).then(
            resp => {
                this.setState( {list: resp.data})
            }
        )
    }

    renderLi(){
        return this.state.list.map(photo => {
            return (
                <li>teste</li>
            )
        })
    }

    render(){
        return <ul>
            {this.renderLi()}
        </ul>
    }
}



export default props => 
    <Main icon="home" title="Exercices 4" subtittle="Portifolio">
        <div className='display-4'>Exercices 4!</div>
        <hr/>
        <h2>Quelques photos à moi</h2>
        <Photos/>
        
    </Main>