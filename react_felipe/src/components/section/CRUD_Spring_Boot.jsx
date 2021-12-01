import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import APIService from './APIService'
import ListeEdit from './ListeProduitEdit'
import { Link, withRouter } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const baseUrl = '/api/products'
const initialState = {
    produit: {id: '', nom: '', prix: '', rabais: ''},
    list: []
}
const config = {mode: 'cors', // no-cors, *cors, same-origin
credentials: 'same-origin', // include, *same-origin, omit
headers: { 
    'Accept': 'application/json',
    'Content-Type': 'application/json'
 }};

class Produits extends Component {
    state = {...initialState}

    async componentDidMount(){
        const response = await fetch(baseUrl, config);
        const body = await response.json();
        this.setState({list: body});
    }

    //Function que DELETE un produit puis mets à jour la liste.
    async remove(id) { 
        await fetch(`${baseUrl}/${id}`, {
          method: 'DELETE',
          ...config
        }).then(() => {
          let updatedList = [...this.state.list].filter(i => i.id !== id);
          this.setState({list: updatedList});
        });
    }
    //Function PUT / POST
    async save() {
        const {produit} = this.state
        const requestOptions = {
            method: (produit.id) ? 'PUT' : 'POST',
            body: JSON.stringify(produit),
            ...config
        };
        debugger;
        fetch(baseUrl, requestOptions);

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
                        <button className="btn btn-primary" onClick={() => this.load(produit)}>Éditer</button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(produit.id)}>Effacer</button>
                    </td>
                </tr>
            )
        })
    }
    updateField(event){ //Methode pour mettre à jour le champs du form
        const produit = {...this.state.produit} //On clone l'utilisateur du state
        produit[event.target.name] = event.target.value // On utiliste le nom de l'input pour chercher la propriété du 'state'
        this.setState({produit}) 
    }

    clear() {
        this.setState({produit: initialState.produit})
    }

    load(produit){
        this.setState( {produit} )
    }


    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="nom" 
                                    value={this.state.produit.nom}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Voulez saisir le nom..."></input>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Prix</label>
                            <input type="text" 
                                    className="form-control"
                                    name="prix"
                                    value={this.state.produit.prix}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Voulez saisir le prix">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Rabais</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="rabais" 
                                    value={this.state.produit.rabais}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Voulez saisir le rabais(%) entre 0 et 1..."></input>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                                onClick={e => this.save(e)}>Enregistrer</button>
                        <button className="btn btn-secondary ml-2"
                                onClick={e => this.clear(e)}> Annuler</button>
                    </div>
                </div>
                </div>


            </div>
        )
    }

    render(){
        return (
            <div>
                {this.renderForm()}
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