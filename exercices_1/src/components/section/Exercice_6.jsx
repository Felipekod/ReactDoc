import React from 'react'
import Main from '../../components/template/Main'

class NameForm extends React.Component {
    constructor(props){
        super(props)
        this.state= {value: ''}

        //bind
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        alert('Un nom a été envoyé: ' + this.state.value)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom: {this.state.value}
                    <hr/>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="btn btn-primary ml-4" type='submit' value='Envoyer'/>
            </form>
        )
    }
}

class EssayForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { value: "Ecrivez n'importe quoi "}

        //bind
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Un text a été envoyé: ' + this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Value: {this.state.value}
                    <hr/>
                    <textarea type='text' value={this.state.value} onChange={this.handleChange} />
                </label>
                <input className="btn btn-primary" type='submit' value='Envoyer'/>
            </form>
        )
    }
}

class FlavorForm extends React.Component {
    constructor(props){
        super(props)

        this.state = { value: ' ---   Dont you like games? =(   --- '}

        //binding
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('Vouz avez choisi: ' + this.state.value)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Voulez choisir votre jeu préféré:
                    <hr/>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value=''></option>
                        <option value='the witcher 3'>The witcher 3</option>
                        <option value='the last of us'>The last of us</option>
                        <option value='ocarina of time'>Ocarina of time</option>
                        <option value='the breath of the wild'>The breath of the wild</option>
                        <option value='god of war'>God of war</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" className="btn btn-primary" />
            </form>
        )
    }
}

export default props =>
<Main icon="home" title="Exercices 6" subtittle="Portifolio">
    <div className='display-4'>Exercices 6!</div>
    <hr/>
    <NameForm />
    <hr/>
    <EssayForm />
    <hr/>
    <FlavorForm/>


</Main>