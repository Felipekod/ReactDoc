import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import './Exercice_4.css'

const baseUrl = 'http://localhost:3001/photos'
const initialState = {
    photo: {id: '', fileName: ''},
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
                <li className="picture_box"  key={photo.id}>
                    <img className="picture item" src={require('../../assets/pictures/' + photo.fileName + '.jpeg').default}/>
                    <div className='description'>
                        <h4><b>{photo.nom}</b></h4>
                    </div>
                </li>
            )
        })
    }

    render(){
        return (
            <div className="container">
                <ul className="picture_list" >
                {this.renderLi()}
                </ul>
            </div>
        )

    }
}



export default props => 
    <Main icon="home" title="Exercices 4" subtittle="Portifolio">
        <div>
            <div className='display-4'>Exercices 4!</div>
            <hr/>
            <h2>Quelques photos à moi</h2>
            <h6>Using Axios avec Node au backend</h6>
        </div>
        
        <Photos/>
        
    </Main>