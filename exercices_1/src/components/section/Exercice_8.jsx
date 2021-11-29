import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import APIService from './APIService'
import ListeEdit from './ListeProduitEdit'
import { Link, withRouter } from 'react-router-dom'

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

    //Function que DELETE un produit puis mets à jour la liste.
    async remove(id) { 
        await fetch(`/api/products/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedList = [...this.state.list].filter(i => i.id !== id);
          this.setState({list: updatedList});
        });
      }

    renderLi(){
        return this.state.list.map(produit => {
            return (
                <tr key={produit.id}>
                    <td>{produit.id}</td>
                    <td>{produit.nom}</td>
                    <td>{produit.prix}</td>
                    <td>{produit.rabais}</td>
                    <td>
                        <Link to={"/ListeProduitEdit/" + produit.id}>
                          <i className="btn btn-primary"></i> Edit
                         </Link>
                        <button className="btn btn-primary" tag={Link} to={"/ListeProduitEdit/" + produit.id}>Éditer</button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(produit.id)}>Effacer</button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return (
            <div>
                <table className="table table-striped">
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Rabais</th>
                        <th>Action</th>
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