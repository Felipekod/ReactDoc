import React, { Component }  from "react"
import { Link, useParams } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import Main from "../template/Main"





class ListeProduitsEdit extends Component {

    produit = {
        id: "",
        nom: "",
        prix: "",
        rabais: ""
    }

    constructor(props) {
        super(props)
        this.state = {
          item: this.produit
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        console.log(this.props.match && this.props.match.params.id)
        if (this.props.match.params.id !== 'new') {
          const group = await (await fetch(`/api/produits/${this.props.match.params.id}`)).json();
          this.setState({item: group})
        }
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        let item = {...this.state.item}
        item[name] = value
        this.setState({item})
    }

    async handleSubmit(event) {
        event.preventDefault()
        const {item} = this.state
    
        await fetch('/api/products' + (item.id ? '/' + item.id : ''), {
          method: (item.id) ? 'PUT' : 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        })
        this.props.history.push('/products')
    }

    render() {
        const {item} = this.state
        const title = <h2>{item.id ? 'Edit Produit' : 'Add Produit'}</h2>

        return <div>
            {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="nom" value={item.nom || ''}
                   onChange={this.handleChange} autoComplete="name"/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Prix</Label>
            <Input type="text" name="address" id="prix" value={item.prix || ''}
                   onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="rabais">Rabais</Label>
            <Input type="text" name="rabais" id="rabais" value={item.rabais || ''}
                   onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/Exercice_8">Cancel</Button>
          </FormGroup>
        </Form>
        </div>
    }


}

//export default withRouter(ListeProduitsEdit);
export default props => 
    <Main>
        <ListeProduitsEdit/>
    </Main>
