import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import APIService from './APIService'

const baseUrl = 'http://localhost:8080/api/products'
const initialState = {
    produit: {id: ''},
    list: []
}

class Produits extends Component {
    state = {...initialState}

    async componentDidMount(){
        const response = await fetch('/api/products');
        const body = await response.json();
        this.setState({list: body});
    }

    renderLi(){
        return this.state.list.map(produit => {
            return (
                <tr key={produit.id}>
                    <td>{produit.id}</td>
                    <td>{produit.nom}</td>
                    <td>{produit.prix}</td>
                    <td>{produit.rabais}</td>
                </tr>
            )
        })
    }

    render(){
        return (
            <div>
                <table className="table">
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Rabais</th>
                    </tr>
                     {this.renderLi()}
                </table>
            </div>
        )
    }
}

export default props => 
    <Main icon="home" title="Exercices 4" subtittle="Portifolio">
        <div>
            <div className='display-4'>List de produits!</div>
            <hr/>
            <h2>Backend en Java Spring Boot</h2>
        </div>
        <Produits/>
    </Main>